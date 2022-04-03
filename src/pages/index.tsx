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
        <div>記事一覧</div>
        <ul>
          <li>
            {allPosts.map((post) => (
              <a href={post.slug} key={post.slug}>
                {post.title}
                {post.date}
              </a>
            ))}
          </li>
        </ul>
      </Layout>
    </div>
  );
};

export default Home;
