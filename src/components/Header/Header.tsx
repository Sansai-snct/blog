import Link from 'next/link';
import React, { VFC } from 'react';
import useSimpleDarkMode from '../../lib/useSimpleDarkMode';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Header: VFC = () => {
  const { isDarkMode, toggle } = useSimpleDarkMode();
  return (
    <section>
      <div>
        <h1 className='text-4xl md:text-6xl text-center dark:text-white'>
          <Link href='/'>
            <a>Sansai's blog</a>
          </Link>
        </h1>

        <ul className='flex justify-end text-xl md:text-4xl'>
          <li className='mr-2 md:mr-4'>
            <button onClick={() => toggle()}>{isDarkMode ? <FaSun /> : <FaMoon />}</button>
          </li>
          <li className='mr-2 md:mr-4'>
            <a target='_blank' href='https://github.com/Sansai-snct' rel='noopener noreferrer'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
