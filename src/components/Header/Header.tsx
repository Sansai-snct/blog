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

        <ul className='flex  justify-end text-2xl md:text-4xl'>
          <li className='mr-2 md:mr-4'>
            <button onClick={() => toggle()}>
              {isDarkMode ? <FaSun className='dark:text-white' /> : <FaMoon />}
            </button>
          </li>
          <li className='mr-2 md:mr-4'>
            <a target='_blank' href='https://github.com/Sansai-snct' rel='noopener noreferrer'>
              <FaGithub className='dark:text-white ' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
