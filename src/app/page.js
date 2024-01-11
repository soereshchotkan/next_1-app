import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex justify-center mt-[10vh] mx-auto px-[10vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4 bg-[#adbdc9] p-3">
          <h1 className="text-4xl lg:text-7xl font-bold">Next js 14 <br/>Home page <br/>Test fase <br/></h1>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sapiente inventore illo. Expedita quo nostrum sed deleniti ipsam?
          </p>
          <div className="flex gap-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button 1
        </button>
        <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[#adbdc9] p-3">
        <Image src="/foto.jpg" width={800} height={800} objectFit="auto" alt="home foto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
