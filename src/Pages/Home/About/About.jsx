import about from '../../../assets/about.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 '>
    <img src={about} className="w-3/4 rounded-lg shadow-2xl" />
    
    </div>
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">About Us!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">About Us</button>
    </div>
  </div>
</div>
    );
};

export default About;