/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '600' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.06em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "baskervillemtw01-smbdit",
                paragraph: "open sans"
            },
            colors: {
                mutedolive: '#4B9E6F',
                darktext: '#1A1A1A',
                subtleborder: '#E5E7EB',
                foreground: '#FFFFFF',
                destructive: '#EF4444',
                destructiveforeground: '#FFFFFF',
                background: '#FFFFFF',
                secondary: '#3B82F6',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#FFFFFF',
                primary: '#1A1A1A',
                accent: '#10B981',
                'accent-light': '#D1FAE5',
                'blue-light': '#EFF6FF',
                'green-light': '#F0FDF4',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
