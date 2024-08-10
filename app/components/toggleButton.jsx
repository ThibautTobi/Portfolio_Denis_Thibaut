'use client'
import { useTheme } from "./themeContexe";
import Image from "next/image";
import sun from "../../public/icone/soleil.png";
import moon from "../../public/icone/lune.png";

export default function ButtonToggle() {
// recuperation de la varaible et fonction du contexte par l'intermediare du provider
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 m-auto bg-gray-200 dark:bg-neutral-600 rounded">
    {/* condition affichage en recuperant dans le contexe  si isDarkMode est sur true ou false */}
      {isDarkMode ? (
        <Image src={sun} alt="Mode Clair" width={20} height={20} />
      ) : (
        <Image src={moon} alt="Mode Sombre" width={20} height={20} />
      )}
    </button>
  );
}
