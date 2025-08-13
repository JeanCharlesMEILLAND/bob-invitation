'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
      <header
          className="fixed inset-x-0 top-0 block z-50 transition-all"
          style={{
            backgroundColor: scrolled ? '#EDF3FF' : 'transparent'
          }}
      >
        <Container className="flex items-center justify-between py-8">
          {/* Logo only */}
          <Link href="/" aria-label="Accueil" className="flex items-center gap-3">
            <Image
                src="/Group 1000001197.svg"
                alt="Logo BOB"
                width={62}
                height={62}
                className=""
                priority
            />
          </Link>
        </Container>
      </header>
  )
}