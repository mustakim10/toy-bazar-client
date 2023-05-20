import img1 from '../../assets/gallery/1.jpeg'
import img2 from '../../assets/gallery/2.jpeg'
import img3 from '../../assets/gallery/3.jpeg'
import img4 from '../../assets/gallery/4.jpeg'
import img5 from '../../assets/gallery/5.jpeg'
import img6 from '../../assets/gallery/6.jpeg'
import img7 from '../../assets/gallery/7.jpeg'
import img8 from '../../assets/gallery/8.jpeg'
import img9 from '../../assets/gallery/9.jpeg'

const Gallery = () => {
    return (
        <div>
            <h2 className='text-4xl my-16 font-bold text-center'>Our Gallery</h2>
            <div className='md:grid md:grid-cols-3 '>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
            </div>
        </div>
    );
};

export default Gallery;