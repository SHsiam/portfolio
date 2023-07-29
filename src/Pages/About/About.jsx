//import { TypeAnimation } from 'react-type-animation';
import { useTypewriter, Cursor} from "react-simple-typewriter";
import profile from '../../assets/sh-siam.png'


const About = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Development","Full Stack Development", "Front-end Development", "ReactJS Developer", "Web Development"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
    return (
        <div className="hero text-white bg-slate-950 py-6 text-justify">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div className="w-full lgl:w-1/2 flex justify-center items-center  relative px-4 py-4">
      <img src={profile} className="max-w-xl h-96 rounded-lg shadow-slate-100 shadow-md w-[300px] lgl:w-[500px] lgl:h-[680px] z-10 s  "/>   
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-slate-900 to-slate-900 shadow-shadowOne flex justify-center items-center "></div> 
      </div> 
            <div className='px-6' >
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize text-yellow-500">Sayed Hossain Bhuiyan</span>
        </h1>
        <h2 className="text-2xl font-bold text-white pt-2">
        <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
                <p className="py-6 text-lg leading-loose space-x-2">Experienced MERN (MongoDB, Express, React, Node.js) Stack Developer. Proficient in building dynamic web applications using React.js, Express, Node.js, and MongoDB. Skilled in integrating technologies for enhanced functionality. Strong problem-solving abilities and a commitment to delivering high-quality code.
                Throughout my career, I have had the opportunity to work on projects with a team of developers and designers, honing my communication, collaboration, and problem-solving skills. This experience has prepared me to work in professional environments and manage complex projects with ease.
                I am constantly seeking opportunities to learn and grow in my field, always staying up-to-date with the latest industry trends and best practices. I am excited to continue my work as a React developer and contribute to the development of innovative and engaging applications.
                </p>
            </div>
        </div>
    </div>
    );
};

export default About;