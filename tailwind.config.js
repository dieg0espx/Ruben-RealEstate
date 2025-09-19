/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        lexend: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Your exact 6 color palette + light cream background
        'coastal-tan': '#D7B794',
        'coastal-sage': '#5F7D6D', 
        'coastal-teal': '#799A98',
        'coastal-slate': '#577586',
        'coastal-steel': '#618398',
        'coastal-charcoal': '#383D3D',
        'coastal-cream': '#E8E4E0', // Light cream for backgrounds
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'coastal-gradient': 'linear-gradient(135deg, #577586 0%, #799A98 100%)',
        'beach-gradient': 'linear-gradient(135deg, #D7B794 0%, #E8E4E0 100%)',
      },
    },
  },
  plugins: [],
}
