import React from "react";

const UserDialog = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent the dialog from closing when clicking inside it
      >
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <div className="space-y-2 text-center">
          <img
            src={user.profile_image_url}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
          />
          <div>
            <strong>Name:</strong> {user.first_name + " " + user.last_name}
          </div>
          <div>
            <strong>Phone:</strong> {user.contact_number}
          </div>
          <div>
            <strong>City:</strong> {user.city}
          </div>
        </div>
        <div className="mt-4 text-right">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDialog;
