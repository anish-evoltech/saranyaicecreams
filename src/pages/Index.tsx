import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import LatestNews from '@/components/home/LatestNews';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <LatestNews />
    </Layout>
  );
};

export default Index;
