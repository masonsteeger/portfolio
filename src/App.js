import React, {useState, useEffect} from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Bio from './containers/Bio/Bio';
import Projects from './containers/Projects/Projects'
import Resume from './containers/Resume/Resume';
import { Element } from 'react-scroll';
import './App.css';

const App = (props) => {
  
  const [page, setPage] = useState('home');

  useEffect(() => {
    function handleScroll(e) {
      const y = window.scrollY
      const projectY = document.getElementById('projects').getBoundingClientRect().y
      const bioY = document.getElementById('bio').getBoundingClientRect().y
      const resumeY = document.getElementById('resume').getBoundingClientRect().y
      switch(true){
        case y < 200 && page !== 'home':
          setPage('home')
          break;
        case projectY < 200 && projectY > -600 && page!== 'projects':
          setPage('projects');
          break;
        case bioY < 200 && bioY > -600 && page !== 'bio':
          setPage('bio')
          break;
        case resumeY < 200 && page !== 'resume':
          setPage('resume')
          break;
        default:
          return
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div className="App">
      <Background />
      <Navbar page={page}/>
      <Element id='home' name='home'>
        <Header/>
      </Element>
      <Element id='projects' name='projects'>
        <Projects/>
      </Element>
      <Element id='bio' name='bio'>
        <Bio />
      </Element>
      <Element id='resume' name='resume'>
        <Resume/>
      </Element>
    </div>
  );
}

export default App;
