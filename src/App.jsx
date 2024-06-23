import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-cover bg-center bg-no-repeat bg-gradient-to-t
         from-sky-950 to-black to 80%">
          <About />
        </div>
        <div className="bg-cover bg-center bg-no-repeat bg-gradient-to-t
         from-sky-800 to-sky-950 to 80%">
        <Projects />
        </div>
        <div className="bg-tech bg-cover bg-center bg-no-repeat bg-gradient-to-t
         from-sky-600 to-sky-800 to 80%">
          <Tech />
        </div>
        <div
          className="bg-experienceLight bg-cover bg-center bg-no-repeat
          bg-gradient-to-t from-sky-400 to-sky-600 to 80%">
            <Experience />
        </div>
        <div className="relative z-0 bg-experienceLight bg-cover bg-center bg-no-repeat
          bg-gradient-to-t from-sky-200 to-sky-400 to 80%">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
