import res1 from '../../assets/res/res1.jpeg'
import res2 from '../../assets/res/res2.jpeg'

const Responsibility = () => {
    return (
        <div className='container mt-10 md:flex md:items-center gap-20 my-5 '>
            <div className="w-1/2 space-y-11">
                <h2 className='text-2xl'>Our Services</h2>
                <p>Our mission is to serve the community by offering a state-of-the-art facility with professional management, and by hosting local events, conventions, trade shows, meetings, and concerts generating significant economic impact for the City of Pembroke Pines as well as promoting education, entertainment and community pride, in a fiscally responsible manner. In addition, the City Center will support and encourage actions and programs that enhance the desirability and attractiveness of Pembroke Pines to neighboring communities.</p>
                <h3 className='text-2xl'>Responsibilities</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, rem!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolorem.</li>
                    <li>Ensure appealing plate presentation</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div>
            <div className='w-full relative'>
    <img src={res1} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={res2} className="w-1/2 absolute right-5 top-1/2 border-8 boredr-white rounded-lg shadow-2xl" />
    </div>
            </div>
        </div>
    );
};

export default Responsibility;