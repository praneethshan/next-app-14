/** @format */
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
  // Use router hook to access new next router
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/users')} className="btn btn-primary">
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
