'use client'
import { createContext, useState, useContext, useEffect } from 'react';

// Création du contexte
const ThemeContext = createContext();

// Provider du contexte
export const ThemeProvider = ({ children }) => {
  // État local pour suivre si le mode sombre est activé
  const [isDarkMode, setIsDarkMode] = useState(false);

  // chargement du thème sauvegardé à partir du localStorage au montage du composant
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
    // Met à jour l'état avec le thème sauvegardé
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // sauvegarde le thème dans le localStorage et appliquer la classe CSS correspondante à l'élément racine du document (documentElement)
  useEffect(() => {
    // Sauvegarde l'état du mode sombre dans le localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
    // Ajoute la classe 'dark' pour activer le mode sombre
      document.documentElement.classList.add('dark');
    } else {
    // Supprime la classe 'dark' pour désactiver le mode sombre
      document.documentElement.classList.remove('dark');
    }
    // Exécute l'effet chaque fois que isDarkMode change
  }, [isDarkMode]);

  // Fonction pour basculer entre le mode sombre et le mode clair
  const toggleTheme = () => {
    // Inverse l'état actuel du mode sombre false ou true
    setIsDarkMode(!isDarkMode);
  };

  // Retourne le Provider du contexte avec les valeurs actuelles du thème et la fonction de basculement a tous les enfants
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => useContext(ThemeContext);