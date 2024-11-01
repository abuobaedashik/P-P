import React from "react";

const Itzone = () => {
  return (
    <div>
      <div className="flex md:flex-row mx-auto w-11/12 rounded-2xl flex-col items-center justify-between  bg-slate-400 px-5 py-10 mt-4 md:gap-16">
        <div className="flex flex-col justify-center  md:w-2/5">
          <h1 className="text-4xl mb-7 font-semibold text-[#ffffffe6] ">
            About P&P It Zone
          </h1>
          <p className="text-base font-normal text-[#ffffff8f] ">
            PNP IT Zone is a technology solutions provider, offering a wide
            range of IT services and support to businesses and individuals.
            Their primary focus is on helping clients leverage technology for
            operational efficiency and growth. PNP IT Zone specializes in areas
            such as software development, cybersecurity, cloud computing,
            network management, and IT consulting.
          </p>
          <button className="btn-sm btn px-4 py-1 mt-5 bg-red-400 text-white">Details</button>
        </div>
        <div className="md:w-2/5 ">
          <div className="carousel rounded-box w-96 h-80">
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>
       

          <div className="mx-auto w-11/12 mt-16">
              <p className=" text-center font-bold text-5xl text-red-500">Our All Course</p>
          </div>
      <div className="flex flex-col md:flex-row mt-5 gap-8 py-5 justify-between mx-auto w-11/12  ">
            <div className="border bg-blue-400 text-white flex-col rounded-3xl flex justify-center items-center px-12 py-5 gap-5">
                <div><h1 className="text-2xl font-bold">Graphics Design</h1></div>
                <div className="flex justify-center flex-col gap-4  flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 py-2 btn rounded-lg bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
            <div className="border bg-blue-400 rounded-3xl text-white flex-col flex items-center  px-12 py-5 gap-5">
                <div><h1 className="text-2xl font-bold">Web Development</h1></div>
                <div className="flex  flex-col gap-4 flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 btn py-2 rounded-3xl bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
            <div className="border bg-blue-400 text-white  flex-col rounded-3xl flex px-12 py-5 justify-center items-center gap-5">
                <div><h1 className="text-2xl font-bold">UI/UX</h1></div>
                <div className="flex justify-center flex-col gap-4 flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 btn py-2 rounded-lg bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
            <div className="border bg-blue-400 text-white  flex-col rounded-3xl flex px-12 py-5 justify-center items-center gap-5">
                <div><h1 className="text-2xl font-bold">Video Editing</h1></div>
                <div className="flex justify-center flex-col gap-4 flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 btn py-2 rounded-lg bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
             
        </div>
      
    </div>
  );
};

export default Itzone;
