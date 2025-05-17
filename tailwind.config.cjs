module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: [
              'forma-djr-text', 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic',
              'Segoe UI Symbol', 'Arial', 'sans-serif'
            ].join(', '),
            h1: {
              fontFamily: 'forma-djr-text, Noto Sans KR, sans-serif',
              fontWeight: '800',
              fontSize: '2.35rem',
              lineHeight: '1.13',
              marginTop: '0.4em',
              marginBottom: '0.4em',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontWeight: '700',
              fontSize: '1.7rem',
              lineHeight: '1.13',
              marginTop: '0.4em',
              marginBottom: '0.4em',
              letterSpacing: '-0.01em',
            },
            h3: {
              fontWeight: '700',
              fontSize: '1.18rem',
              lineHeight: '1.25',
              marginTop: '0.4em',
              marginBottom: '0.4em',
              letterSpacing: '-0.01em',
            },
            h4: {
              color: '#888',
              fontSize: '0.8em',
              fontWeight: '400',
              fontStyle: 'italic',
              marginTop: '0.4em',
              marginBottom: '0.4em',
            },
            p: {
              fontSize: '1.07rem',
              fontWeight: '400',
              lineHeight: '1.6',
              marginTop: '0.4em',
              marginBottom: '0.4em',
              letterSpacing: '-0.01em',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeft: '4px solid #dadada',
              color: '#555',
              backgroundColor: '#fafafa',
              paddingLeft: '1.1em',
              marginTop: '0.4em',
              marginBottom: '0.4em',
            },
            img: {
              borderRadius: '0.8em',
              margin: '0.1em',
            },
            ul: {
              marginTop: '0.4em',
              marginBottom: '0.4em',
              paddingLeft: '0.1em',
            },
            ol: {
              marginTop: '0.4em',
              marginBottom: '0.4em',
              marginLeft: '1.2em',
              paddingLeft: '0.15em',
            },
            li: {
              marginTop: '0.4em',
              marginBottom: '0.4em',
              lineHeight: '1',
            },
            code: {
              backgroundColor: '#f5f5f5',
              color: '#333',
              padding: '0.11em 0.32em',
              borderRadius: '0.3em',
              fontSize: '0.97em',
            },
            pre: {
              backgroundColor: '#fafafa',
              color: '#222',
              padding: '0.7em',
              borderRadius: '0.7em',
              fontSize: '0.96em',
              marginTop: '0.4em',
              marginBottom: '0.4em',
            },
            a: {
              color: '#009695',
              textDecoration: 'underline',
              fontWeight: '500',
              transition: 'color 0.16s',
            },
            'a:hover': {
              color: '#08786b',
            },
            hr: {
              margin: '0.4em 0',
              borderColor: '#e5e7eb',
            },
            table: {
              margin: '0.4em 0',
              borderCollapse: 'collapse',
            },
            'th, td': {
              border: '1px solid #e3e3e3',
              padding: '0.38em 0.7em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
