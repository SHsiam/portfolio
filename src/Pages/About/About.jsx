import { TypeAnimation } from 'react-type-animation';
import profile from '../../assets/sh-siam.png'


const About = () => {

    return (
        <div className="hero text-white bg-gray-900  text-justify">
        <div className="hero-content flex-col lg:flex-row-reverse py-6 ">
      
      <img src={profile} className="max-w-xl h-96 rounded-lg shadow-2xl   "/>
     
      
           
            <div className='px-6' >
                <h1 className="text-3xl font-bold">I am Sayed Hossain Bhuiyan</h1>
                {/* <h2 className="text-xl font-bold py-2">MERN Stack Developer</h2> */}
                <TypeAnimation
  sequence={[
    'MERN Stack Developer',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
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