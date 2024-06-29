import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-[100dvh] flex-col items-center text-center justify-center p-24">
      <h1>
        Clique Aqui para testar o Minguuu!!
      </h1>
      <Link href="/signup" className="bg-red-500">
        venha ser fashion!
      </Link>
    </main>
  );
}
