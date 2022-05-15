import Link from 'next/link';
import React, { VFC } from 'react';
import { useDarkMode } from '../../lib/useDarkMode';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Header: VFC = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <section>
      <div>
        <h1 className='text-3xl md:text-6xl text-center dark:text-white'>
          <Link href='/'>
            <a>Sansai's blog</a>
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Header;
