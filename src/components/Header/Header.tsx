import Link from 'next/link';
const Header: React.VFC = () => {
  return (
    <header className=''>
      <nav>
        <Link href='/'>
          {' '}
          <a>Sansai's blog</a>{' '}
        </Link>
      </nav>
    </header>
  );
};
