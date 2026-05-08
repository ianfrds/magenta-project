module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        primary: {
          50: '#E7F5FF',
          100: '#D0EBFF',
          200: '#A5D8FF',
          300: '#74C0FC',
          400: '#4DABF7',
          500: '#339AF0',
          600: '#228BE6',
          700: '#1C7ED6',
          800: '#1971C2',
          900: '#0D47A1',
        },
        magenta: {
          50: '#FFF0F6',
          100: '#FFDEEB',
          200: '#FCC2D7',
          300: '#FAA2C1',
          400: '#F783AC',
          500: '#F06595',
          600: '#E64980',
          700: '#D6336C',
          800: '#C2255C',
          900: '#880E4F',
        },
        joowara: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFC107',
          500: '#FFB300',
          600: '#FFA000',
          700: '#FF8F00',
          800: '#F57C00',
          900: '#E65100',
        },
        kidz: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
        },
        alert: {
          error: {
            light: '#FFEBEE',
            DEFAULT: '#F44336',
            dark: '#D32F2F',
          },
          success: {
            light: '#E8F5E9',
            DEFAULT: '#4CAF50',
            dark: '#388E3C',
          },
          warning: {
            light: '#FFFDE7',
            DEFAULT: '#FFEB3B',
            dark: '#FBC02D',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'premium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
