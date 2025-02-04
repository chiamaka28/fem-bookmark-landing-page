import Cta from '@/components/Cta';
import Faq from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header.tsx';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
