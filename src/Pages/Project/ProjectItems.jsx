import toy from '../../assets/project/toys/toy.png'
import master from '../../assets/project/master/master.png'
import sport1 from '../../assets/project/sports/sport.png'
import { Link } from 'react-router-dom';



const ProjectItems = () => {
    return (
        <div className="sm:grid-cols-3 grid text-white py-4 px-4 my-4">
        <div className="card mx-2 my-2">
        <figure className="bg-white">
       <img className='w-full' src={sport1} alt="sport-1" />
            </figure>
        <div className="card-body bg-gray-800">
          <h2 className="card-title text-2xl font-bold">
            Sports Academy
          </h2>
          <div className="card-actions justify-end">
            <Link to='sports-car'>
            <button className="btn btn-primary font-bold">View Detail</button> 
            </Link>
          </div>
        </div>
        </div>

        <div className="card mx-2">
        <figure className="bg-white">
       <img className='w-full' src={toy} alt="sport-1" />
            </figure>
        <div className="card-body bg-gray-800">
          <h2 className="card-title text-2xl font-bold">
            Toys Car
          </h2>
          <div className="card-actions justify-end">
            <Link to='toy-car'>
          <button className="btn btn-primary font-bold">View Detail</button> 
          </Link>
          </div>
        </div>
        </div>

        <div className="card mx-2 my-2">
        <figure className="bg-white">
       <img className='w-full' src={master} alt="sport-1" />
            </figure>
        <div className="card-body bg-gray-800">
          <h2 className="card-title text-2xl font-bold">
            Master Chef USA
          </h2>
          <div className="card-actions justify-end">
            <Link to='master-chef-usa'></Link>
          <button className="btn btn-primary font-bold">View Detail</button> 
          </div>
        </div>
        </div>
      </div>
    );
};

export default ProjectItems;