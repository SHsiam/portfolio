import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-gray-900 text-white">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left px-6 ">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="py-2">mdshiam4@gmail.com</p>
      <p className="py-2">+8801817791056</p>
      <div>
  <div className="flex gap-2">
    <div >
    <Link to='https://web.facebook.com/sh.shiam.5/' >
   <FaFacebook className="w-6 h-8"/>
   </Link>
    </div>
  
   <Link to='https://www.linkedin.com/in/sh-siam-full-stack-digital-marketer-in-bangladesh/'>
   <FaLinkedin className="w-6 h-8" />
   </Link>
   <Link to='https://github.com/SHsiam'>
   <FaGithub className="w-6 h-8"/>
   </Link>
  </div>
</div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-800 text-black">
      <div className="card-body font-bold ">
      <div className="form-control">
          <label className="label ">
            <span className="label-text text-white text-xl ">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white text-xl  ">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" />
        </div>

        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white text-xl  ">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;