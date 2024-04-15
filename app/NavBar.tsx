/** @format */

import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link className="mr-5" href="/">
        Next JS
      </Link>
      <Link className="mr-2" href="/users/">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
