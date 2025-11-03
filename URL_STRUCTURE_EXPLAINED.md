# Website URL Structure Explained

## 🌐 Current URL Structure

Your Ruben Real Estate website has the following URL structure:

### ✅ Main Homepage
- **URL**: `https://rubenrealestate.com/` (root domain)
- **File**: `app/page.tsx`
- **Component**: `HomePage`
- **Status**: ✅ Active homepage
- **Canonical**: Yes - `https://rubenrealestate.com/`

### ✅ Landing Page (SEPARATE PAGE)
- **URL**: `https://rubenrealestate.com/landing`
- **File**: `app/landing/page.tsx`
- **Component**: `LandingPage`
- **Status**: ✅ Active separate page
- **Canonical**: Yes - `https://rubenrealestate.com/landing`
- **Purpose**: Alternative homepage layout

### 🔄 Redirected URL
- **URL**: `/home`
- **File**: `app/home/page.tsx`
- **Component**: `HomePage`
- **Status**: 🔄 Redirects to `/` (301 Permanent)
- **Purpose**: Old/backup route

---

## 🎯 Which URL Should Users Visit?

### ✅ **Main Homepage**:
```
https://rubenrealestate.com/
```
Primary homepage with video hero and sections.

### ✅ **Landing Page** (Alternative Layout):
```
https://rubenrealestate.com/landing
```
Alternative homepage with section components.

### ❌ **Don't Use This** (redirects):
```
https://rubenrealestate.com/home     → Redirects to /
```

---

## 📋 Complete Site URL Structure

### Main Pages:
- **Homepage**: `/` 
- **Landing Page**: `/landing`
- **About**: `/about`
- **Services**: `/services`
- **Contact**: `/contact`
- **Results**: `/results`
- **Resources**: `/resources`

### Service Areas:
- **Hub**: `/service-areas`
- **San Marcos**: `/service-areas/san-marcos`
- **Carlsbad**: `/service-areas/carlsbad`
- **Oceanside**: `/service-areas/oceanside`
- **Escondido**: `/service-areas/escondido`
- **Vista**: `/service-areas/vista`

### Legal Pages:
- **Privacy**: `/privacy`
- **Terms**: `/terms`

---

## 🤔 Why Do `/home` and `/landing` Exist?

**`/landing` - ACTIVE PAGE:**
- Alternative homepage layout
- Uses section-based components (Header, HeroSection, etc.)
- Has its own canonical URL
- Included in sitemap
- Both `/` and `/landing` are accessible

**`/home` - REDIRECTS:**
- Same content as main homepage
- Redirects to `/` to prevent duplicate content
- Preserves SEO value with 301 redirect

---

## 🔧 How Redirects Work

### Configuration
**File**: `next.config.mjs` (lines 15-35)

```javascript
async redirects() {
  return [
    {
      source: '/home',
      destination: '/',
      permanent: true, // 301 redirect
    },
  ]
}
```

### User Experience
**For `/landing`:**
1. User visits `/landing`
2. Server serves the landing page
3. User sees the landing page layout

**For `/home`:**
1. User visits `/home`
2. Server automatically redirects with HTTP 301
3. Browser loads the main homepage `/`
4. URL in browser shows `/`

---

## 📊 SEO Implications

### ✅ Good News:
- **No duplicate content issues** - redirects prevent this
- **All link equity flows to `/`** - consolidated SEO value
- **Canonical URL clearly defined** - `/` is the main one
- **Search engines understand** - 301 redirects signal permanent moves

### ✅ Best Practices:
- All marketing materials should link to `/`
- Social media profiles should use `https://rubenrealestate.com/`
- Print materials should show `https://rubenrealestate.com/`
- Internal navigation uses `/`
- Sitemap only includes `/`

---

## 🚀 For Marketing & Promotion

### ✅ Main Homepage:
```
https://rubenrealestate.com/
```
Primary homepage with video hero

### ✅ Landing Page:
```
https://rubenrealestate.com/landing
```
Alternative homepage layout

### ✅ Other Pages:
```
https://rubenrealestate.com/about
https://rubenrealestate.com/services
https://rubenrealestate.com/contact
https://rubenrealestate.com/service-areas/san-marcos
```

### ❌ Don't Use This:
```
https://rubenrealestate.com/home
```
*(Redirects to `/`. Use `/` or `/landing` instead.)*

---

## 🎯 Summary

| Aspect | Answer |
|--------|--------|
| **Main Homepage URL** | `https://rubenrealestate.com/` |
| **Landing Page URL** | `https://rubenrealestate.com/landing` |
| **Main Homepage File** | `app/page.tsx` |
| **Landing Page File** | `app/landing/page.tsx` |
| **Redirected URL** | `/home` → redirects to `/` |
| **SEO Impact** | ✅ Both pages active with canonical tags |
| **What to Use in Marketing** | `/` or `/landing` depending on preference |

---

## ✅ Bottom Line

**You have TWO active homepages:**

1. **Main homepage**: `https://rubenrealestate.com/`
   - Video hero section
   - Full page layout

2. **Landing page**: `https://rubenrealestate.com/landing`
   - Section-based components
   - Alternative layout

**And one redirect:**
- `/home` redirects to `/` ✅

