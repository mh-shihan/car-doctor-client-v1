import { Link } from "react-router-dom";
import frame from "../../assets/icons/Frame.png";
const ServiceCard = (props = {}) => {
  const { service } = props || {};
  const { _id, img, price, title } = service;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[220px]" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          <p className="font-bold text-[#FF3811]">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="flex text-[#FF3811] font-bold gap-2">
                <p>Book Now</p>
                <img className="text-[#FF3811]" src={frame} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
