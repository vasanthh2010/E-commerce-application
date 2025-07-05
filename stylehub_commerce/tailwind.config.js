/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#2D3748', //gray-700 - Sophisticated authority for headlines and navigation
        'primary-50': '#F7FAFC', //gray-50
        'primary-100': '#EDF2F7', //gray-100
        'primary-200': '#E2E8F0', //gray-200
        'primary-300': '#CBD5E0', //gray-300
        'primary-400': '#A0AEC0', //gray-400
        'primary-500': '#718096', //gray-500
        'primary-600': '#4A5568', //gray-600
        'primary-700': '#2D3748', //gray-700
        'primary-800': '#1A202C', //gray-800
        'primary-900': '#171923', //gray-900
        'primary-foreground': '#FFFFFF', //white

        // Secondary Colors
        'secondary': '#4A5568', //gray-600 - Supporting text that maintains readability hierarchy
        'secondary-50': '#F7FAFC', //gray-50
        'secondary-100': '#EDF2F7', //gray-100
        'secondary-200': '#E2E8F0', //gray-200
        'secondary-300': '#CBD5E0', //gray-300
        'secondary-400': '#A0AEC0', //gray-400
        'secondary-500': '#718096', //gray-500
        'secondary-600': '#4A5568', //gray-600
        'secondary-700': '#2D3748', //gray-700
        'secondary-800': '#1A202C', //gray-800
        'secondary-900': '#171923', //gray-900
        'secondary-foreground': '#FFFFFF', //white

        // Accent Colors
        'accent': '#38A169', //green-600 - Trust-building green for confirmations and sustainability
        'accent-50': '#F0FFF4', //green-50
        'accent-100': '#C6F6D5', //green-100
        'accent-200': '#9AE6B4', //green-200
        'accent-300': '#68D391', //green-300
        'accent-400': '#48BB78', //green-400
        'accent-500': '#38A169', //green-500
        'accent-600': '#2F855A', //green-600
        'accent-700': '#276749', //green-700
        'accent-800': '#22543D', //green-800
        'accent-900': '#1C4532', //green-900
        'accent-foreground': '#FFFFFF', //white

        // Background Colors
        'background': '#FAFAFA', //gray-50 - Warm white canvas that enhances product photography
        'background-secondary': '#F7FAFC', //gray-50

        // Surface Colors
        'surface': '#FFFFFF', //white - Pure white for product cards and content areas
        'surface-secondary': '#F7FAFC', //gray-50

        // Text Colors
        'text-primary': '#1A202C', //gray-800 - High contrast for extended reading comfort
        'text-secondary': '#718096', //gray-500 - Clear hierarchy for supporting information
        'text-muted': '#A0AEC0', //gray-400

        // Status Colors
        'success': '#48BB78', //green-400 - Positive reinforcement without overwhelming celebration
        'success-50': '#F0FFF4', //green-50
        'success-100': '#C6F6D5', //green-100
        'success-200': '#9AE6B4', //green-200
        'success-300': '#68D391', //green-300
        'success-400': '#48BB78', //green-400
        'success-500': '#38A169', //green-500
        'success-600': '#2F855A', //green-600
        'success-700': '#276749', //green-700
        'success-800': '#22543D', //green-800
        'success-900': '#1C4532', //green-900
        'success-foreground': '#FFFFFF', //white

        'warning': '#ED8936', //orange-400 - Gentle urgency for inventory or time-sensitive information
        'warning-50': '#FFFAF0', //orange-50
        'warning-100': '#FEEBC8', //orange-100
        'warning-200': '#FBD38D', //orange-200
        'warning-300': '#F6AD55', //orange-300
        'warning-400': '#ED8936', //orange-400
        'warning-500': '#DD6B20', //orange-500
        'warning-600': '#C05621', //orange-600
        'warning-700': '#9C4221', //orange-700
        'warning-800': '#7B341E', //orange-800
        'warning-900': '#652B19', //orange-900
        'warning-foreground': '#FFFFFF', //white

        'error': '#E53E3E', //red-500 - Clear problem indication with helpful tone
        'error-50': '#FED7D7', //red-100
        'error-100': '#FEB2B2', //red-200
        'error-200': '#FC8181', //red-300
        'error-300': '#F56565', //red-400
        'error-400': '#E53E3E', //red-500
        'error-500': '#C53030', //red-600
        'error-600': '#9B2C2C', //red-700
        'error-700': '#822727', //red-800
        'error-800': '#63171B', //red-900
        'error-900': '#63171B', //red-900
        'error-foreground': '#FFFFFF', //white

        // Brand Colors
        'brand-primary': '#2d5a27', //Deep forest green expressing growth, confidence, and sustainable values
        'brand-secondary': '#8b4513', //Warm cognac brown evoking craftsmanship, timeless quality
        'conversion-accent': '#d97706', //Energetic amber creating urgency and action without aggression
        'trust-builder': '#1e40af', //Deep navy blue establishing credibility and security

        // Border Colors
        'border': '#E2E8F0', //gray-200
        'border-secondary': '#CBD5E0', //gray-300
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        'accent': ['Playfair Display', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 6vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 7vw, 3rem)',
      },
      spacing: {
        'fluid': 'clamp(16px, 4vw, 64px)',
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      aspectRatio: {
        'square': '1 / 1',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
        'golden': '1.618 / 1',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '8px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      gap: {
        'fluid': 'clamp(16px, 3vw, 32px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}