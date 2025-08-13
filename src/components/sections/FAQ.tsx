// components/sections/FAQ.tsx
import Container from '@/components/ui/Container'

const FAQ = [
  { q: 'BOB est-il public ?', a: 'Non. BOB est privé et ciblé. Pas de catalogue public : vous échangez uniquement avec vos contacts ou les invités d’un événement.' },
  { q: 'C’est quoi “BOBER” ?', a: 'BOBER = proposer ou demander, au choix. Vous pouvez être proactif (proposer) ou réactif (demander).' },
  { q: 'Objets et services ?', a: 'Oui. BOB gère les prêts d’objets et les services ponctuels (aide, bricolage…).' },
  { q: 'Comment fonctionnent les événements ?', a: 'Créez une liste mixte (objets, consommables, services), invitez un petit groupe, et chacun se positionne en un clic.' },
  { q: 'Les rappels sont-ils automatiques ?', a: 'Oui, les rappels sont bidirectionnels (emprunteur et prêteur) et peuvent s’ajouter à votre agenda.' },
  { q: 'Les points Bobies ont une valeur ?', a: 'Non. Les Bobies sont optionnels et servent uniquement à encourager l’entraide.' },
]

export default function FAQSection() {
  return (
    <section id="faq" className="section">
      <Container>
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group p-6 open:bg-white/5">
              <summary className="cursor-pointer list-none text-lg font-medium text-white/90">
                {item.q}
                <span className="float-right text-white/60 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-white/75">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
