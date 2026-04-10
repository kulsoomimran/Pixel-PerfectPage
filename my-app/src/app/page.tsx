import Navbar from "./components/navbar";
import Cards from "./components/card";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className='w-full max-w-[1046px] min-h-[1028px] mt-[50px] mx-auto py-[80px] gap-[80px] flex flex-col justify-center items-center bg-custom-dblue px-4'>
        <div className='w-full max-w-[699px] py-[40px] gap-[40px] flex flex-col justify-center items-center px-4'>
          <h5 className="text-[16px] font-montserrat font-bold leading-[24px] tracking-0.1 text-custom-blue">
            Welcome
          </h5>
          <div className='w-full max-w-[546px]'>
            <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-0.2 text-center text-white">
              Selling on the internet like a pro
            </h1>
          </div>
          <div className='w-full max-w-[510px]'>
            <h4 className="text-[20px] font-montserrat font-normal leading-[30px] tracking-0.2 text-center text-white">
              We know how large objects will act, but things on a
              small scale just do not act that way.
            </h4>
          </div>
          <div className='w-full max-w-[365px] flex flex-row gap-[10px] justify-center'>
            <button className="w-[193px] h-[52px] py-[15px] px-[30px] gap-[10px] rounded-[5px] text-white bg-custom-blue hover:bg-transparent border border-custom-blue font-montserrat font-bold text-[14px] leading-[22px]">
              Get Quote Now
            </button>
            <button className="w-[162px] h-[52px] py-[15px] px-[30px] gap-[10px] rounded-[5px] border border-custom-blue font-montserrat font-bold text-[14px] text-custom-blue hover:bg-custom-blue hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}
