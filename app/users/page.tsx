/** @format */

import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

const UsersPage = () => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>

      <UserTable />
    </>
  );
};

export default UsersPage;
