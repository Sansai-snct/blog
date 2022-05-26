import { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getAllPosts, getPostBySlug } from '../lib/api';
import Layout from '../components/Layout/Layout';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import gfm from 'remark-gfm';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'date', 'content']);

  const content = await post.content;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <Layout pageTitle={post.title}>
        <div className='grid grid-cols-8'>
          <div className='col-span-2' />
          <div className='markdown-body col-span-8 md:col-span-4 m-10  dark:bg-gray-700 dark:text-white'>
            <ReactMarkdown remarkPlugins={[gfm]}>{post.content}</ReactMarkdown>
          </div>
          <div className='col-span-2' />
        </div>
      </Layout>
    </div>
  );
};

export default Post;
