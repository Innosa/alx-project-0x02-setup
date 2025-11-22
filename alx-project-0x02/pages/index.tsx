import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>
                <Link href="/home" className="hover:underline ">Home</Link><br/>
                <Link href="/about" className="hover:underline">About</Link>
            </h1>
        </div>
    );
}

