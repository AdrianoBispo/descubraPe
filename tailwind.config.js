import withMT from "@material-tailwind/react/utils/withMT";
import typography from '@tailwindcss/typography'; // <-- Importa o plugin

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    typography, // <-- Usa a variável importada aqui
  ],
});