import Link from 'next/link';
import React, { VFC } from 'react';
const Header: VFC = () => {
  return (
    <header>
      <nav>
        <Link href='/'>
          <a>Sansai's blog</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
