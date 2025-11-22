import React, { useState, useEffect } from 'react';
import PostCard from '@/components/common/PostCard';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to load posts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <h1>All Posts</h1>

      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default PostsPage;