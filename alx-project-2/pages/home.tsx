import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Welcome to My ALX Project
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Next.js Rocks!"
              content="I'm learning Next.js with App Router, TypeScript, and Tailwind CSS."
            />
            <Card
              title="Reusable Components"
              content="This Card component is dynamic and can be used anywhere!"
            />
            <Card
              title="ALX Task Done"
              content="Checker passed 100%. I'm ready for the next challenge!"
            />
          </div>
        </div>
      </main>
    </>
  );
}
