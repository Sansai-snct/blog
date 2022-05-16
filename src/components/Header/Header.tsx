import Link from 'next/link';
import React, { VFC } from 'react';

const Header: VFC = () => {
  return (
    <section>
      <div>
        <h1 className='text-4xl md:text-6xl mb-4 text-center dark:text-white font-noto1'>
          <Link href='/'>
            <a>Sansai's blog</a>
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Header;
