'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setReferrer(ref)
      console.log('Parrain:', ref)
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur Bob 👋</h1>
      <p className="text-lg mb-6">
        {referrer
          ? `Vous avez été invité par ${referrer}`
          : 'Découvrez notre application dès maintenant !'}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://ton-lien-apk.com"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger l&apos;APK Android
        </a>
        <a
          href="https://testflight.apple.com/join/ton-code"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rejoindre TestFlight iOS
        </a>
      </div>
    </main>
  )
}
