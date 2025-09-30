import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Debug: Log all environment variables
    console.log('Environment variables check:')
    console.log('SMTP_HOST:', process.env.SMTP_HOST)
    console.log('SMTP_USER:', process.env.SMTP_USER)
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'SET' : 'NOT SET')
    console.log('SMTP_FROM:', process.env.SMTP_FROM)
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL)

    const body = await request.json()
    const { firstName, lastName, email, phone, clientType, message, marketingConsent } = body

    // Map client type values to display labels
    const clientTypeLabels: { [key: string]: string } = {
      'veteran': 'Veteran',
      'investor': 'Real Estate Investor',
      'family': 'Growing Family',
      'first-time': 'First-Time Buyer',
      'other': 'Other'
    }
    
    const clientTypeLabel = clientTypeLabels[clientType] || clientType

    // Validate required fields
    if (!firstName || !lastName || !email || !clientType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP environment variables')
      return NextResponse.json(
        { 
          error: 'Email service not configured',
          debug: {
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_USER: process.env.SMTP_USER,
            SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT SET'
          }
        },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify transporter configuration
    try {
      console.log('Verifying SMTP connection...')
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { 
          error: 'Email service configuration invalid',
          details: verifyError instanceof Error ? verifyError.message : 'SMTP verification failed'
        },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'ruben.o.banuelos@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #5F7D6D; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Client Type:</strong> ${clientTypeLabel}</p>
            <p><strong>Marketing Consent:</strong> ${marketingConsent ? 'Yes' : 'No'}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message || 'No message provided'}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from the contact form on your website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Send email
    console.log('Attempting to send email...')
    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
