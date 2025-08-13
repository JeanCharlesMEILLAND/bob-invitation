// components/sections/Events.tsx
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function Events() {
  return (
    <section id="events" className="section">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Texte explicatif */}
          <div>
            <h2 className="text-3xl font-bold">
              Organisez vos événements privés
            </h2>
            <p className="mt-4 text-white/80">
              Avec BOB, créez des <strong className="text-white">événements privés</strong> pour vos proches et gérez
              tout ce qui est nécessaire en un seul endroit. Idéal pour un barbecue, un déménagement ou un projet entre amis.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Liste mixte : <strong className="text-white">objets</strong> à apporter ou prêter</li>
              <li>• <strong className="text-white">Consommables</strong> à amener</li>
              <li>• <strong className="text-white">Services</strong> ponctuels pour aider</li>
              <li>• Invitations ciblées : 5, 10 ou 20 contacts</li>
              <li>• Chat collectif pour coordonner tout le monde</li>
              <li>• <strong className="text-white">Positionnement en 1 clic</strong> → crée l’échange individuel + ajoute un rappel à l’agenda</li>
            </ul>
          </div>

          {/* Visuel placeholder */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-glow">
            <div className="aspect-[4/3] w-full rounded-xl2 bg-black/30 ring-1 ring-white/10 flex items-center justify-center text-white/60">
              <span className="text-sm text-center px-4">
                Capture d’écran recommandée : exemple d’événement avec liste mixte
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
