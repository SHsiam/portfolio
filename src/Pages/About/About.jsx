import profile from '../../assets/sh-siam.png'

const About = () => {
    return (
        <div className="hero text-white bg-gray-900 text-justify">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={profile} className="max-w-sm rounded-lg shadow-2xl  " />
            <div >
                <h1 className="text-3xl font-bold">I am Sayed Hossain Bhuiyan</h1>
                <h2 className="text-xl font-bold py-2">MERN Stack Developer</h2>
                <p className="py-6">Experienced MERN (MongoDB, Express, React, Node.js) Stack Developer. Proficient in building dynamic web applications using React.js, Express, Node.js, and MongoDB. Skilled in integrating technologies for enhanced functionality. Strong problem-solving abilities and a commitment to delivering high-quality code.</p>
            </div>
        </div>
    </div>
    );
};

export default About;