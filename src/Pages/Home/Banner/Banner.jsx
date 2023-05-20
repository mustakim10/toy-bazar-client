import img1 from '../../../assets/banner2.jpg';



const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute h-full rounded-lg flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 pl-12 w-1/2'>
        <h1 className='text-6xl font-bold'>Fun Toys For your Kids</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum illo qui similique delectus ratione repellendus dignissimos dolor, eos, hic nam facilis corrupti ut placeat. Molestiae necessitatibus quod cum sed dolores?</p>
        
        <button className="btn btn-outline btn-secondary">Learn More</button>
    </div>
    </div>
    
  </div> 
  
  
 
</div>
    );
};

export default Banner;