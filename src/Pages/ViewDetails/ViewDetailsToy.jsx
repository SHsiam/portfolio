import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import view1 from '../../assets/project/toys/view (5).png';
import view2 from '../../assets/project/toys/view (1).png'
import view3 from '../../assets/project/toys/view (2).png'
import view4 from '../../assets/project/toys/view (3).png'
import view5 from '../../assets/project/toys/view (4).png'
import { Carousel } from 'react-responsive-carousel';
const ViewDetailsToy = () => {
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
            <h2 className="text-center text-3xl font-bold py-4 " >Toy Cars</h2>
            <p className='px-4 py-4'>
            Crafted an engaging Toy Cars website with distinct sections including All Toys, My Toys, Add Toys, Blog, and Login. Leveraged the power of the MERN stack to deliver a captivating user experience. Implemented dynamic features, user authentication, and real-time updates, ensuring a seamless browsing experience.
            </p>
            <div className='text-center '>
                <Link  to='https://toys-car-d036e.web.app/' target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary font-bold text-lg mx-4 my-4">Live Link</button>
                </Link>
                <Link to='https://github.com/SHsiam/toys-car-client' target="_blank" rel="noopener noreferrer">
                <button className="btn btn-info font-bold text-lg">GitHub Link</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ViewDetailsToy;