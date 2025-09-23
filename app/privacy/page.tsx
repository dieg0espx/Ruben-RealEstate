'use client'

import Link from 'next/link'
import { useLanguageStore } from '@/hooks/useLanguageStore'

export default function PrivacyPolicyPage() {
  const { t } = useLanguageStore()
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t('legal.privacy.title')}</h1>
      <p className="text-muted-foreground mb-6">{t('legal.privacy.intro')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.consent.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.consent')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.information.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.collect')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.use.title')}</h2>
      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
        <li>{t('legal.privacy.use.1')}</li>
        <li>{t('legal.privacy.use.2')}</li>
        <li>{t('legal.privacy.use.3')}</li>
        <li>{t('legal.privacy.use.4')}</li>
        <li>{t('legal.privacy.use.5')}</li>
      </ul>

      <p className="text-muted-foreground mb-6"><strong>{t('legal.no_sale_share')}</strong></p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.logfiles.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.logfiles')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.cookies.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.cookies')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.rights.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.rights')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.children.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.children')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.changes.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.privacy.changes')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.privacy.contact.title')}</h2>
      <p className="text-muted-foreground">
        {t('legal.privacy.contact_label')} <a className="underline" href="mailto:ruben.o.banuelos@gmail.com">ruben.o.banuelos@gmail.com</a> (541) 602-1026.
      </p>

      <p className="text-muted-foreground mt-6">
        See also our <Link className="underline" href="/terms">{t('legal.link.terms')}</Link>.
      </p>
    </main>
  )
}


