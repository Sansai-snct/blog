import { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getAllPosts, getPostBySlug } from '../lib/api';
import Layout from '../components/Layout/Layout';
import ReactMarkdown from 'react-markdown';

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
        <div className='markdown '>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </Layout>
    </div>
  );
};

export default Post;
