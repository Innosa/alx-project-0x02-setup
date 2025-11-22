import PostCard from '@/components/common/PostCard';

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

type Post = PostProps & { id: number };

export default function PostsPage({ posts }: { posts: Post[] }) {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>All Posts</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}