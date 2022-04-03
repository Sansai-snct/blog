import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LayoutInterface {
  pageTitle: string;
}

const Layout: React.FC<LayoutInterface> = ({ children, pageTitle }) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
