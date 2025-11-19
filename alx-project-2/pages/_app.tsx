import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    const newPost = { id: Date.now(), title, content };
    setPosts([newPost, ...posts]); // newest first
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">My Posts</h1>
            
            {/* Button to open modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              + New Post
            </button>
          </div>

          {/* Show all posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500 col-span-3">No posts yet. Click "New Post" to add one!</p>
            ) : (
              posts.map((post) => (
                <Card key={post.id} title={post.title} content={post.content} />
              ))
            )}
          </div>
        </div>

        {/* The Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={addPost}
        />
      </main>
    </>
  );
}
