
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Project from '../../Project/Project';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='bg-gray-900'>
           <About></About>
            <Skills ></Skills>
            <div>
            <h2 className="text-center text-3xl font-bold text-white py-14 " >My Project</h2>
            <Project></Project>
            <Contact></Contact>
            </div>
          
        </div>
    );
};

export default Home;