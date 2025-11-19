import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-blue-600">
          Welcome to My ALX Next.js Project! 🎉
        </h1>
        <p className="mt-6 text-2xl">Setup complete and working perfectly!</p>
      </main>
    </>
  );
}