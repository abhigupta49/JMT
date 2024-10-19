
import './App.css';
import Header from './component/Header';
import FeaturedProducts from './component/FeatureProduct';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Testimonials from './component/Testimonials';
import NewsComponent from './component/NewsComponent';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <NewsComponent />
      <Footer />
    </div>
  );
}

export default App;
