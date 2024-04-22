import Header from './Header';
import Presentation from '../components/Presentation';
import GitHubProjectsProvider from '../components/GitHubProjectsProvider';
import ProjectCarousel from '../components/ProjectCarousel';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Aquí envolvemos Presentation con un div que tiene el id */}
        <div id="top">
          <Presentation />
        </div>
        <GitHubProjectsProvider>
          {/* Aquí envolvemos ProjectCarousel con un div que tiene el id */}
          <div id="projects">
            <ProjectCarousel />
          </div>
        </GitHubProjectsProvider>
        {/* Aquí envolvemos CTA con un div que tiene el id */}
        <div id="hire-me">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
