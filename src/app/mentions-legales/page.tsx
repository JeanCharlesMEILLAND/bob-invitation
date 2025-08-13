export default function MentionsLegales() {
  return (
      <main className="container py-16 max-w-4xl mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-6 text-accent">Mentions Légales</h1>
        <p className="mb-8 text-sm text-gray-600">Dernière mise à jour : 13 août 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-accent">1. Informations sur l&#39;Éditeur de
            l&#39;Application</h2>
          <p className="mb-4"><strong>Nom de l&#39;application :</strong> BOB – Borrow & Back</p>
          <p className="mb-4"><strong>Forme juridique :</strong> SAS, société par actions simplifiée</p>
          <p className="mb-4"><strong>Adresse du siège social :</strong> 52 Chemin de la Closerie des Lilas (VC 217),
            83500 La Seyne-sur-Mer, France</p>
          <p className="mb-4"><strong>Numéro de téléphone :</strong> +48 508 708 250</p>
          <p className="mb-4">
            <strong>Adresse e-mail :</strong> <a className="text-accent underline"
                                                 href="mailto:jc.meilland@idboats.com">jc.meilland@idboats.com</a>
          </p>
          <p className="mb-4"><strong>Numéro d&#39;immatriculation :</strong> 940 267 057 R.C.S. Toulon</p>
          <p className="mb-4"><strong>Capital social :</strong> 10 000,00 €</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-accent">2. Hébergement de l&#39;Application</h2>
          <p className="mb-4"><strong>Nom de l&#39;hébergeur :</strong> Hostinger International Ltd</p>
          <p className="mb-4"><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <p className="mb-4"><strong>Numéro de téléphone :</strong> +357 24 03 03 19</p>
          <p className="mb-4">
            <strong>Site web :</strong> <a className="text-accent underline" href="https://www.hostinger.fr"
                                           target="_blank" rel="noopener noreferrer">https://www.hostinger.fr</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-accent">3. Propriété Intellectuelle</h2>
          <p className="mb-4">
            Tous les contenus présents dans l&#39;application (textes, images, graphismes, logo, icônes, sons,
            logiciels, etc.) sont la propriété exclusive de BOB BORROW & BACK, sauf mention contraire.
          </p>
          <p className="mb-4">
            Les utilisateurs restent propriétaires de leurs contenus (photos, descriptions, etc.), mais en autorisent
            l&#39;usage dans le cadre du bon fonctionnement de la plateforme.
          </p>
          <p className="mb-4">
            BOB BORROW & BACK se réserve le droit de supprimer tout contenu inapproprié, illégal ou frauduleux sans
            préavis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-accent">4. Données Personnelles</h2>
          <p className="mb-4">
            BOB BORROW & BACK respecte la vie privée des utilisateurs et s&#39;engage à protéger leurs données
            conformément au RGPD. Les données collectées sont utilisées uniquement dans le cadre de l&#39;application.
          </p>
          <p className="mb-4">
            Pour exercer vos droits ou poser des questions : <a className="text-accent underline"
                                                                href="mailto:jc.meilland@idboats.com">jc.meilland@idboats.com</a>
          </p>
          <p className="mb-4">
            Consultez notre politique complète ici : <a className="text-accent underline"
                                                        href="https://www.bobapp.fr/conditions-utilisation"
                                                        target="_blank"
                                                        rel="noopener noreferrer">https://www.bobapp.fr/conditions-utilisation</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-accent">5. Limitation de Responsabilité</h2>
          <p className="mb-4">
            BOB BORROW & BACK ne peut être tenue responsable des dommages matériels, pertes de données ou litiges entre
            utilisateurs. L&#39;éditeur fournit uniquement un cadre de gestion des prêts.
          </p>
          <p className="mb-4">
            Tout abus ou comportement frauduleux pourra entraîner la suspension immédiate du compte et un signalement
            aux autorités compétentes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-accent">6. Droit Applicable et Juridiction</h2>
          <p className="mb-4">
            Les présentes mentions sont régies par le droit français. En cas de litige, compétence est attribuée aux
            tribunaux de Toulon.
          </p>
        </section>
      </main>
  );
}