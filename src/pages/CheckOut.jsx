import { Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking = {
      custerName: name,
      service: title,
      img,
      email,
      date,
      price,
      service_id: _id,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Booking added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <h1>Book Service : {title} </h1>
      <form onSubmit={handleBookService} className="flex justify-center mb-20">
        <div className="bg-[#F4F3F0] w-3/4 rounded-xl p-10">
          {/* Form Row of Name and  date  */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row of phone and email */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-xl font-bold">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Due Amount</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={"$" + price}
                  name="due"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Text area */}
          <div className="relative w-full] border border-blue-gray-200 p-1 bg-transparent rounded-md mt-4">
            <Textarea variant="static" placeholder="Your Comment" rows={8} />
          </div>

          {/* Submit Button  */}
          <div className="mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-block text-base-100 bg-[#FF3811] font-bold "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
