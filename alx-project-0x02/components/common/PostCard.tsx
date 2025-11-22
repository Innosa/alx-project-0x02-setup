import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;