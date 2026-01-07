import { IoCarSport } from "react-icons/io5";
import {
  FaCamera,
  FaVolumeUp,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaSpotify,
} from "react-icons/fa";
import { BsThreeDots, BsX } from "react-icons/bs";

export default function ToolbarPane({ onToggleDrawer, isDrawerOpen, toolbarButtonRef, onToggleAirCon, climateButtonRef1, climateButtonRef2 }) {
  return (
    <div className="bg-black h-full flex items-center justify-between px-4">
      {/* Left section */}
      <div className="flex items-center">
        <IoCarSport className="text-zinc-400 text-4xl" />
      </div>

      {/* climate section 1 */}
      <div ref={climateButtonRef1} className="flex items-center space-x-6">
        <FaChevronLeft className="text-zinc-700 text-xs" />
        <span 
          className="text-zinc-400 text-[1.75rem] font-extralight cursor-pointer"
          onClick={onToggleAirCon}
        >
          60
        </span>
        <FaChevronRight className="text-zinc-700 text-xs" />
      </div>

      {/* Center section */}
      <div className="flex items-center space-x-6">
        <FaCamera className="text-white text-[1.5rem]" />
        <FaSpotify className="text-green-500 text-[1.5rem]" />
        {isDrawerOpen ? (
          <div ref={toolbarButtonRef} onClick={onToggleDrawer}>
            <BsX
              className="text-white bg-zinc-600 rounded-lg p-0.5 text-[1.75rem] cursor-pointer" 
            />
          </div>
        ) : (
          <div ref={toolbarButtonRef} onClick={onToggleDrawer}>
            <BsThreeDots 
              className="text-zinc-300 rounded-lg border-2 border-zinc-700 p-0.5 text-[1.75rem] cursor-pointer" 
            />
          </div>
        )}
        <FaPhoneAlt className="text-green-500 text-[1.5rem]" />
      </div>

      {/* climate section 2 */}
      <div ref={climateButtonRef2} className="flex items-center space-x-6">
        <FaChevronLeft className="text-zinc-700 text-xs" />
        <span 
          className="text-zinc-400 font-extralight text-[1.75rem] cursor-pointer"
          onClick={onToggleAirCon}
        >
          60
        </span>
        <FaChevronRight className="text-zinc-700 text-xs" />
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <FaChevronLeft className="text-zinc-700 text-xs" />
        <FaVolumeUp className="text-white text-[1.75rem]" />
        <FaChevronRight className="text-zinc-700 text-xs" />
      </div>
    </div>
  );
}
