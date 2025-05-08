'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setReferrer(ref)
      // Exemple : envoyer le referrer à une API ou l'enregistrer localement
      console.log('Parrain:', ref)
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur Bob 👋</h1>
      <p className="text-lg mb-6 text-center">
        {referrer
          ? `Vous avez été invité par ${referrer}`
          : 'Découvrez notre application dès maintenant !'}
      </p>
      <a
        href="https://lien-vers-ton-app.com"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Télécharger l&apos;application
      </a>
    </main>
  )
}
