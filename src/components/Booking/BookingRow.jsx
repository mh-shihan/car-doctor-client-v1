const BookingRow = (props = {}) => {
  const { booking, handleDelete, handleBookingConfirm } = props || {};
  //   console.log(Object.keys(booking).join(", "));
  const { _id, custerName, service, img, date, price, status } = booking;

  return (
    <tr className="font-bold">
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{custerName}</div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        {status === "Confirm" ? (
          <span className="text-primary ">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
