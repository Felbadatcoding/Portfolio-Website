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
         from-blue-950 to-sky-950 to 80%">
        <Projects />
        </div>
        <div className="bg-tech bg-cover bg-center bg-no-repeat bg-gradient-to-t
         from-blue-800 to-blue-950 to 80%">
          <Tech />
        </div>
        <div
          className="bg-experienceLight bg-cover bg-center bg-no-repeat
          bg-gradient-to-t from-blue-700 to-blue-800 to 80%">
            <Experience />
        </div>
        <div className="relative z-0 bg-experienceLight bg-cover bg-center bg-no-repeat
          bg-gradient-to-t from-blue-200 to-blue-700 to 80%">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
