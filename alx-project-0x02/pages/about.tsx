// pages/about.tsx
import React from 'react';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">About Us</h1>

      <div className="flex flex-col gap-4 max-w-xs">
        <Button
          size="small"
          shape="rounded-sm"
          variant="primary"
          onClick={() => alert('Small button clicked!')}
        >
          Small Button
        </Button>

        <Button
          size="medium"
          shape="rounded-full"
          variant="secondary"
          onClick={() => alert('Medium button clicked!')}
        >
          Medium Button
        </Button>

        <Button
          size="large"
          shape="rounded-md"
          variant="danger"
          onClick={() => alert('Large button clicked!')}
        >
          Large Button
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
