import React from "react";

function Card({ data, onClick }) {
  return (
    <div
      className="bg-white p-4 shadow-md rounded-lg cursor-pointer hover:shadow-lg"
      onClick={() => onClick(data)}
    >
      <img
        src={data.profile_image_url}
        alt={data.name}
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold">
        {data.first_name + " " + data.last_name}
      </h3>
      <p className="text-sm text-gray-500">{data.contact_number}</p>
      <p className="text-sm">{data.city}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
}

export default Card;
