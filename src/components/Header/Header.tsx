import Link from 'next/link';
import React, { VFC } from 'react';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Header: VFC = () => {
  return (
    <section>
      <div>
        <h1 className='text-4xl text-center'>
          <Link href='/'>
            <a>Sansai's blog</a>
          </Link>
        </h1>

        <ul className='flex justify-end text-4xl'>
          <li className='mr-4'>
            <button>
              <FaMoon />
            </button>
          </li>
          <li className='mr-4'>
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
