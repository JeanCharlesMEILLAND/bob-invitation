"use client";

/**
 * Fonction pour faire défiler la page vers un élément cible avec une animation fluide personnalisée
 * @param element - L'élément HTML vers lequel défiler
 * @param duration - Durée de l'animation en millisecondes
 * @param offset - Décalage optionnel par rapport au haut de l'élément (peut être négatif)
 */
export const smoothScrollTo = (
  element: HTMLElement, 
  duration: number = 1000, 
  offset: number = 0
): void => {
  if (!element) return;
  
  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  
  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  
  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);
    
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  };
  
  // Démarrage de l'animation
  window.requestAnimationFrame(animation);
};

/**
 * Fonction pour défiler vers un élément identifié par un attribut data-section
 * @param sectionName - Nom de la section (valeur de l'attribut data-section)
 * @param duration - Durée de l'animation en millisecondes
 * @param offset - Décalage optionnel par rapport au haut de l'élément
 */
export const scrollToSection = (
  sectionName: string, 
  duration: number = 1000, 
  offset: number = 0
): void => {
  const targetElement = document.querySelector(`[data-section="${sectionName}"]`) as HTMLElement;
  
  if (targetElement) {
    smoothScrollTo(targetElement, duration, offset);
  }
};