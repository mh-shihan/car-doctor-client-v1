import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[90vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-xl " />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 rounded-xl  ">
          <div className="pl-6 md:pl-10 lg:pl-32 pt-6 md:pt-24 lg:pt-32 w-3/4 lg:w-2/4 h-full text-white space-y-2 md:space-y-6 ">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 ">
              <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-secondary bg-transparent md:ml-6 border-base-100 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0  transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide6" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-xl" />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 rounded-xl  ">
          <div className="pl-6 md:pl-10 lg:pl-32 pt-6 md:pt-24 lg:pt-32 w-3/4 lg:w-2/4 h-full text-white space-y-2 md:space-y-6 ">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 ">
              <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-secondary bg-transparent md:ml-6 border-base-100 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-xl" />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 rounded-xl  ">
          <div className="pl-6 md:pl-10 lg:pl-32 pt-6 md:pt-24 lg:pt-32 w-3/4 lg:w-2/4 h-full text-white space-y-2 md:space-y-6 ">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 ">
              <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-secondary bg-transparent md:ml-6 border-base-100 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-xl" />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 rounded-xl  ">
          <div className="pl-6 md:pl-10 lg:pl-32 pt-6 md:pt-24 lg:pt-32 w-3/4 lg:w-2/4 h-full text-white space-y-2 md:space-y-6 ">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex  gap-2 ">
              <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-secondary bg-transparent md:ml-6 border-base-100 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full rounded-xl" />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 rounded-xl  ">
          <div className="pl-6 md:pl-10 lg:pl-32 pt-6 md:pt-24 lg:pt-32 w-3/4 lg:w-2/4 h-full text-white space-y-2 md:space-y-6 ">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 ">
              <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-secondary bg-transparent md:ml-6 border-base-100 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banner6} className="w-full rounded-xl" />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 rounded-xl  ">
          <div className="pl-6 md:pl-10 lg:pl-32 pt-6 md:pt-24 lg:pt-32 w-3/4 lg:w-2/4 h-full text-white space-y-2 md:space-y-6 ">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 ">
              <button className="btn btn-secondary bg-[#FF3811] border-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-secondary bg-transparent md:ml-6 border-base-100 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide5" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
