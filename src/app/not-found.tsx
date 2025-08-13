import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <h1 className="text-4xl font-extrabold">Page introuvable</h1>
      <p className="mt-3 text-gray-700">La page que vous cherchez n’existe pas.</p>
      <Link href="/" className="btn-primary mt-6 inline-block">Retour à l’accueil</Link>
    </main>
  );
}
