/* app/opengraph-image.tsx */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'               // recommandé pour next/og
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  const NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'BOB'
  const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://new-bob.vercel.app'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b1020',
          color: '#fff',
          fontFamily: 'Inter, system-ui, Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* IMPORTANT: next/og ne supporte pas <Image />, <img> est OK ici */}
          <img
            src={`${BASE}/bob1.png`}
            alt="Logo BOB"
            width={80}
            height={80}
            style={{ borderRadius: 16 }}
          />
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5 }}>{NAME}</div>
        </div>

        <div style={{ marginTop: 24, fontSize: 40, fontWeight: 700 }}>
          Échanges privés entre proches
        </div>
        <div style={{ marginTop: 12, fontSize: 26, lineHeight: 1.35, opacity: 0.9 }}>
          Prêter, emprunter et organiser des événements en privé avec ses contacts. <br />
          Aucune transaction financière. Aucune mise en relation publique.
        </div>
      </div>
    ),
    size
  )
}
