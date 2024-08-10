/** @type {import('tailwindcss').Config} */
module.exports = {
   // Utilisation de la classe 'dark' pour activer le mode sombre
  darkMode: 'class',
  // Cette option spécifie les fichiers que Tailwind doit analyser pour générer les classes CSS
  //
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Permet de personnaliser le thème du projet et aussi étendre les couleurs, les typographies, les espacements,...
  theme: {
    extend: {
      fontFamily: {
        // Si Ubuntu échoue, 'Arial', 'Helvetica', 'sans-serif' est utilisé en commencant par arial sinon helvetica...
        ubuntu: ['var(--font-ubuntu)', 'Arial', 'Helvetica', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'Comic Sans MS', 'cursive'],
      },
    },
  },
  // Permet d'ajouter des plugins pour étendre les fonctionnalités de Tailwind CSS
  plugins: [],
}
