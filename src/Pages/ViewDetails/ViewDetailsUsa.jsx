import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import view1 from '../../assets/project/master/view (3).png'
import view2 from '../../assets/project/master/view (1).png'
import view3 from '../../assets/project/master/view (4).png'
import view4 from '../../assets/project/master/view (5).png'
import view5 from '../../assets/project/master/view (2).png'
const ViewDetailsUsa = () => {
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
                <div>
                    <img src={view5} />
                </div>
            </Carousel>
            <div className=' text-white text-justify'>
                <h2 className="text-center text-3xl font-bold py-4 " >Master Chef USA</h2>
                <p className='px-4 py-4'>
                Developed the Master Chef USA website, an interactive culinary platform featuring recipes, cooking tips, chef profiles, and a community forum. Utilized React.js, Firebase, and Tailwind CSS for a seamless user experience. Showcased proficiency in frontend development and database management.
                </p>
                <div className='text-center '>
                    <Link  to='https://master-chef-usa.web.app/' target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary font-bold text-lg mx-4 my-4">Live Link</button>
                    </Link>
                    <Link to='https://github.com/SHsiam/master-chef-usa' target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-info font-bold text-lg">GitHub Link</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsUsa;