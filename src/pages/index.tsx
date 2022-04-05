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
        <ul className='flex flex-wrap  w-full lg:w-3/12  md:mr-4 mb-4 mt-10'>
          {allPosts.map((post) => (
            <a href={post.slug} key={post.slug}>
              <li className='relactive h-48 w-72 bg-white rounded-lg border border-gray-200 shadow-md'>
                <ul className='text-center mt-10'>
                  <li className='text-2xl'>{post.title} </li>
                  <li>{post.date}</li>
                </ul>
              </li>
            </a>
          ))}
        </ul>
      </Layout>
    </div>
  );
};

export default Home;
