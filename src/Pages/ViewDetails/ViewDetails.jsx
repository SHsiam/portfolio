
import { Link } from 'react-router-dom';
import view1 from '../../assets/project/sports/view (1).png'
import view2 from '../../assets/project/sports/view (2).png'
import view3 from '../../assets/project/sports/view (3).png'
import view4 from '../../assets/project/sports/view (4).png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ViewDetails = () => {
    return (
        <div className='bg-gray-900'>
            <Carousel className='py-4' >
                <div>
                    <img src={view1} />
                </div>
                <div>
                    <img src={view2} />
                </div>
                <div>
                    <img src={view3} />

                    <p></p>
                </div>
                <div>
                    <img src={view4} />
                </div>
            </Carousel>
            <div className=' text-white text-justify'>
                <h2 className="text-center text-3xl font-bold py-4 " >Sports Academy</h2>
                <p className='px-4 py-4'>
                    Developed a Sports Academy website using the MERN stack.Implemented admin functionality, payment integration, sports class management, and instructor profiles. Utilized React.js, MongoDB, JWT, Firebase, Express, Node.js, and Tailwind CSS.
                </p>
                <div className='text-center '>
                    <Link  to='https://sports-academy-dfce9.web.app/' target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary font-bold text-lg mx-4 my-4">Live Link</button>
                    </Link>
                    <Link to='https://github.com/SHsiam/sports-academy-client' target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-info font-bold text-lg">GitHub Link</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;