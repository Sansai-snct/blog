import type { InferGetStaticPropsType, NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { getAllPosts } from '../lib/api';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date']);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div>
      <Layout pageTitle='blog|TOP'>
        <div className='text-2xl text-center'>記事一覧</div>
        <ul className='grid  md:grid-cols-4 gap-4  md:mr-4 mb-4 mt-10'>
          {allPosts.map((post) => (
            <li className='p-6  h-48 bg-whiterounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
                {post.title}
              </h5>
              <p className='mb-3 font-normal text-center  text-gray-700 dark:text-gray-400'>
                {post.date}
              </p>
              <div className='block text-center'>
                <a
                  href={post.slug}
                  key={post.slug}
                  className='inline-flex items-center  py-2 px-3 text-sm font-medium  text-white bg-blue-700 rounded-lg w-32 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Read more
                  <svg
                    className='ml-2 -mr-1 w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
};

export default Home;
