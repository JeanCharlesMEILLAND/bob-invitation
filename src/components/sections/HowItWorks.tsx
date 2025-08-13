// components/sections/HowItWorks.tsx
import Container from '@/components/ui/Container'

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#05B1F5] to-[#166DF6]">
      {children}
    </div>
  )
}

/* Icônes SVG minimalistes (stroke=white, pas de lib externe) */
const IconContacts = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M20 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M23 11h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const IconPaperPlane = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22 2 11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="m20 6-11 11-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 8a6 6 0 1 1 12 0v4l1.5 3H4.5L6 12V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Comment ça marche&nbsp;?</h2>
          <p className="mt-3 text-black/80">
            Un flux simple et 100% privé&nbsp;: <span className="text-black">choisir</span> →{' '}
            <span className="text-black">envoyer</span> → <span className="text-black">confirmer</span> →{' '}
            <span className="text-black">rappels automatiques</span>.
          </p>
        </div>

        {/* Steps: pile mobile, grille desktop */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-black/5 ring-1 ring-black/10 p-6">
            <div className="flex items-center gap-3">
              <IconWrap><IconContacts /></IconWrap>
              <h3 className="text-lg font-semibold">Choisir un proche</h3>
            </div>
            <p className="mt-3 text-black/75">
              BOB fonctionne avec <strong className="text-black">vos contacts</strong>. Pas d’annuaire public.
            </p>
            <ul className="mt-4 space-y-1.5 text-black/75">
              <li>• Sélection depuis le répertoire</li>
              <li>• Conversation privée (1-to-1)</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-black/5 ring-1 ring-black/10 p-6">
            <div className="flex items-center gap-3">
              <IconWrap><IconPaperPlane /></IconWrap>
              <h3 className="text-lg font-semibold">Envoyer en privé</h3>
            </div>
            <p className="mt-3 text-black/75">
              Proposer / demander un <strong className="text-black">objet</strong> ou un{' '}
              <strong className="text-black">service</strong>.
            </p>
            <ul className="mt-4 space-y-1.5 text-black/75">
              <li>• Détails clairs (quoi, quand, consignes)</li>
              <li>• Messagerie</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-black/5 ring-1 ring-black/10 p-6">
            <div className="flex items-center gap-3">
              <IconWrap><IconCheck /></IconWrap>
              <h3 className="text-lg font-semibold">Confirmer & suivre</h3>
            </div>
            <p className="mt-3 text-black/75">
              BOB crée l’échange et synchronise les statuts des deux côtés.
            </p>
            <ul className="mt-4 space-y-1.5 text-black/75">
              <li>• Suivi partagé</li>
              <li>• Historique personnel</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-black/5 ring-1 ring-black/10 p-6">
            <div className="flex items-center gap-3">
              <IconWrap><IconBell /></IconWrap>
              <h3 className="text-lg font-semibold">Rappels automatiques</h3>
            </div>
            <p className="mt-3 text-black/75">
              Les rappels partent au bon moment. Plus d’oubli pour rendre ou récupérer.
            </p>
            <ul className="mt-4 space-y-1.5 text-black/75">
              <li>• Ajout à l’agenda</li>
              <li>• Notifs non intrusives</li>
            </ul>
          </div>
        </div>

        {/* Callout événements (optionnel) */}
        <div className="mt-8 rounded-2xl border border-black/10 bg-black/5 p-5 text-center">
          <p className="text-black/80">
            <strong className="text-black">Événements privés</strong>&nbsp;: invitez quelques proches, chacun se
            positionne en 1 clic (objets, consommables, services). Les rappels sont gérés automatiquement.
          </p>
        </div>
      </Container>
    </section>
  )
}
