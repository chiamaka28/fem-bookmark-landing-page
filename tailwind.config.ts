import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      'customButton': '0px 8px 8px -4px rgba(73, 93, 207, 0.20)',
       'customCard' : '0px 10px 20px -5px rgba(73, 93, 207, 0.20)'
    },
    fontFamily:  {
      sans: ['var(--font-rubik)']
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backdropBlur: {
        '16': '16.309690475463867px',
      },
      overflow: {
        'hidden': 'hidden',
      },
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red" : "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "dark-blue": "hsl(229, 31%, 21%)",
        'light-gray': "hsla(0, 0%, 97%, 1)",
        'light-blue': "hsla(231, 58%, 55%, 0.2)",
        'white' : 'hsla(0, 0%, 100%, 1)'
      }
     
    },
  },
} satisfies Config;
