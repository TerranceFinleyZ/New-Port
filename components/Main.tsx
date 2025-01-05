import image from '../assets/th1.jpg';
import { RiLock2Fill } from "react-icons/ri";

const Main = () => {
  return (
    <div
      className="relative w-full h-[667px] bg-cover bg-center text-white flex flex-col items-center" // Changed flex direction
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="mt-10"> {/* Added margin top for spacing */}
        <RiLock2Fill className="text-3xl" /> {/* Increased icon size */}
      </div>
      <h1 className="relative z-10 mt-40 text-1xl drop-shadow-lg text-center"> {/* Added margin top */}
        Swipe to unlock
      </h1>
    </div>
  );
};

export default Main;
