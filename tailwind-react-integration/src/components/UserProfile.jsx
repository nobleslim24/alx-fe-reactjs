import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md rounded-lg sm:p-4 md:p-8 mx-auto max-w-xs md:max-w-sm mt-10 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto mb-4 w-24 h-24 md:w-36 md:h-36 object-cover"
      />
      <h1 className="text-lg md:text-xl font-semibold text-gray-800">
        Christian Essu
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Frontend Developer & Designer passionate about creating responsive web
        experiences.
      </p>
    </div>
  );
};

export default UserProfile;
