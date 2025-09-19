"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Photogenic SD",
    rating: 5,
    date: "3 months ago",
    text: "I am a real estate photographer and I work with a lot of realtors in San Diego. I know a great agent when I arrive to do the photos and the clients have the home 100% picture ready. Ruben does an excellent job setting the expectations for the seller's so his listings always stand out and they are setup for success from the start. Ruben is great guy, super knowledgeable, I would highly recommend him for real estate transactions or property management!"
  },
  {
    id: 2,
    name: "Ella Durbin",
    rating: 5,
    date: "7 months ago",
    text: "Ruben was incredibly helpful for us when we were looking for a tenant for our home. He is knowledgeable, responsive, kind, and understanding. He was able to learn with us and took all our feedback seriously. Couldn't recommend him enough. We will definitely be working with Ruben in the future for any placement or property manager needs."
  },
  {
    id: 3,
    name: "Jackson W",
    rating: 5,
    date: "8 months ago",
    text: "Ruben is awesome! If there were a way to give him 6 stars I would. He is super responsive, and really stays on top of things well. It was very comforting to know we had someone who we could really trust throughout the process. He made everything very smooth and seamless, answered all of our questions and had excellent insight. If you're looking for a real estate agent, Ruben will exceed your expectations."
  },
  {
    id: 4,
    name: "Juan Ramirez",
    rating: 5,
    date: "1 year ago",
    text: "Ruben is exceptional at his craft and does an incredible job at guiding his clients every step of the way in a real estate transaction. He has deep knowledge of the market, great attention to detail, and always puts his clients interest first. You can expect great results when working with Ruben."
  },
  {
    id: 5,
    name: "Hayley Shams",
    rating: 5,
    date: "10 months ago",
    text: "I have had the pleasure of working alongside Ruben on multiple transactions. His passion to serve and educate his clients along the way is truly remarkable. Ruben is hard working, diligent with the details, and gets the job done! Highly recommend him for not only real estate but also property management as well!"
  },
  {
    id: 6,
    name: "Male Beatie",
    rating: 5,
    date: "1 year ago",
    text: "Ruben is very knowledgeable in the home buying and selling process. He educated his clients. He explains everything clearly. Always answers his phone. He makes the home buying/selling process smooth. He is patient and an has a lot of insight and expertise in the RE industry. Ruben listens to his clients needs."
  },
  {
    id: 7,
    name: "Melanie Callaway",
    rating: 5,
    date: "1 year ago",
    text: "Working with Ruben has been an absolute pleasure from start to finish. Not only is he an incredibly skilled real estate agent, but he goes above and beyond by offering invaluable mentorship along the way. As a first-time homebuyer, I was nervous about the entire process, but Ruben's guidance and expertise put me at ease right away. What sets Ruben apart is his genuine commitment to his clients' success. He took the time to understand my needs and patiently answered all my questions, ensuring I felt confident at every step."
  },
  {
    id: 8,
    name: "Olivia Guinn",
    rating: 5,
    date: "1 year ago",
    text: "If you are looking for the best home buying experience, you have to work with Ruben. Ruben has every quality to not only make your homeownership dreams come true but also make the journey an enjoyable experience. He takes on every hurdle that may come along with professionalism and a great attitude. I am proud to say he is my realtor partner."
  },
  {
    id: 9,
    name: "C.J. Penkert",
    rating: 5,
    date: "1 year ago",
    text: "Ruben and his team went above and beyond expectations for us. He represented our interests very well as a buyer agent. Not only from a standpoint of typical broker work, but also his contact list of professional services. He has a stellar network of people that impressed us throughout the process. Thanks Ruben!"
  },
  {
    id: 10,
    name: "Irene Dolan",
    rating: 5,
    date: "1 year ago",
    text: "We were referred to Ruben by a friend who raved of his knowledge. We enjoyed his enthusiasm and his expertise in his field. He enlightened us to some things we would not have thought of, was very informative and eager to answer any and all questions, and was easy to work with. We want to thank him for his time, energy and effort in assisting us and always being available for our 100 questions. Ruben is definitely are go to guy going forward!"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length)
  }

  const goToTestimonials = (index: number) => {
    setCurrentIndex(index)
  }


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const getTotalPages = () => {
    return Math.ceil(testimonials.length / 3)
  }

  const getCurrentPage = () => {
    return Math.floor(currentIndex / 3)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-coastal-cream/30 to-coastal-sage/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-coastal-sage/20 text-coastal-slate border-coastal-sage">
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied clients who trusted Ruben with their real estate needs
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300  h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="p-2 rounded-full bg-coastal-sage/10">
                        <Quote className="w-6 h-6 text-coastal-sage" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed italic text-center">
                      "{testimonial.text}"
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="text-center space-y-1 mt-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonials}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-coastal-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonials}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-coastal-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: getTotalPages() }, (_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonials(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === getCurrentPage()
                  ? 'bg-coastal-sage scale-125'
                  : 'bg-coastal-sage/30 hover:bg-coastal-sage/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
      </div>
    </section>
  )
}
