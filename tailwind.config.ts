import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"


const config = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./src/**/*.{js,ts,jsx,tsx}", // Garante que os estilos sejam aplicados
	],
	theme: {
    	extend: {
    		colors: {
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")], // Plugin necessário para shadcn/ui
} satisfies Config

export default config