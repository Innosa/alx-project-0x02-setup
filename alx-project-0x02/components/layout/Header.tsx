import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-500 text-white p-6">
      <nav className="max-w-4xl mx-auto">
        <div className="flex gap-8 justify-center text-xl">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>

        </div>
      </nav>
    </header>
  );
}