'use client'

import Link from 'next/link'
import useLanguageStore from '@/hooks/useLanguageStore'

export default function TermsPage() {
  const { t } = useLanguageStore()
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t('legal.terms.title')}</h1>
      <p className="text-muted-foreground mb-6">{t('legal.terms.terms')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.use_license.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.use_license.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.disclaimer.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.disclaimer.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.limitations.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.limitations.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.revisions.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.revisions.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.links.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.links.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.modifications.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.modifications.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.governing_law.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.governing_law.body')}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">{t('legal.terms.contact.title')}</h2>
      <p className="text-muted-foreground mb-4">{t('legal.terms.contact.body')}</p>

      <p className="text-muted-foreground mt-6">
        {t('legal.terms.privacy_prompt')} <Link className="underline" href="/privacy">{t('legal.link.privacy')}</Link>.
      </p>
    </main>
  )
}


