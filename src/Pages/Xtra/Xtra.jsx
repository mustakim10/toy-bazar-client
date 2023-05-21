import Marquee from "react-fast-marquee";

const Xtra = () => {
    return (
        <div className='container my-5'>
        <h2 className='text-3xl fw-bold text-center my-3'>Ours Toyes</h2>
        <Marquee speed={100}>
            <img className='m-img w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClvTxuwPMSzWmmkpALk2UHOAr25Afei6G1Q&usqp=CAU" alt="" />
            <img className='m-img w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXIBvn97xVSYECH2vHjZRVIjvYJGmywyqyg&usqp=CAU" alt="" />
            <img className='m-img w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL7H4eebi74c4X3Ly5vHyzzPGWi2-BTD0qA&usqp=CAU" alt="" />
            <img className='m-img w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYcdFkxAVvrqai3vZIKKFTC8uTJ76IFyjSw&usqp=CAU" alt="" />
            <img className='m-img w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjQdt-z7ZcSCngy7p29PP9wk4maPp4WSa1Q&usqp=CAU" alt="" />

        </Marquee>
    </div>
    );
};

export default Xtra;