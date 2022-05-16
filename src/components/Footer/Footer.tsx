import Link from 'next/link';
import React, { VFC } from 'react';
const Footer: VFC = () => {
  return (
    <footer>
      <p className='p-2 text-center text-xs bottom-0 dark:text-white'>
        Copyright © 2022
        <Link href='https://github.com/Sansai-snct/'> Shunta Yamagiwa</Link> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
