import Link from 'next/link';
import React, { VFC } from 'react';
const Header: VFC = () => {
  return (
    <header>
      <nav className=' text-center '>
        <Link href='/'>
          <a className='text-4xl md:text-6xl  font-noto'>Sansai's blog</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
