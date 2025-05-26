'use client'

import { useEffect, useState } from 'react'
import { fetchAndroidLink } from "@/utils/link.utils";
import { ClipboardIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null)
  const [androidUrl, setAndroidUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('invitor')
    setReferrer(ref)

    const startTime = Date.now();

    Promise.all([
      fetchAndroidLink(),
      new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
    ]).then(([url]) => {
      if (url) {
        setAndroidUrl(url)
      }
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime);
    })
  }, [])

  const handleButtonClick = async (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <div className="animate-fade-in text-center">
            <h1 className="text-5xl font-bold mb-8 text-blue-400">Bob</h1>
            <div className="flex justify-center items-center mb-8">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
            <p className="text-lg">Chargement en cours...</p>
          </div>
        </div>
    )
  }

  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Bienvenue sur Bob 👋</h1>
        <p className="text-lg mb-6">
          {referrer
              ? (
                  <>
                    Votre code d&#39;invitation est :
                    <span className="font-bold"> {referrer}</span>
                    <button
                        onClick={() => {
                          navigator.clipboard.writeText(referrer);
                        }}
                        className="ml-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                        title="Copier le code"
                    >
                      <ClipboardIcon className="h-5 w-5 inline" />
                    </button>
                  </>
              )
              : 'Découvrez notre application dès maintenant !'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
              onClick={() => handleButtonClick(androidUrl || "")}
              className=" cursor-pointer bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition transform hover:scale-105"
          >
            Télécharger l&apos;APK Android
          </button>
          <button
              onClick={() => handleButtonClick(process.env.NEXT_PUBLIC_TEST_FLIGTH || "")}
              className=" cursor-pointer bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition transform hover:scale-105"
          >
            Rejoindre TestFlight iOS
          </button>
        </div>
      </main>
  )
}