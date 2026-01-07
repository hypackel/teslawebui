export default function AirCon({ isOpen, airConRef }) {
  return (
    <div
      ref={airConRef}
      className={`bg-zinc-300 absolute bottom-[0%] left-0 w-full h-[60%] flex flex-col items-center justify-center transition-all duration-300 ease-out z-50 ${
        isOpen ? 'translate-y-0' : 'translate-y-[calc(100%+1.5rem)]'
      }`}
    >
      {/* Pill box above main content */}
      <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="px-30 py-4 rounded-2xl bg-zinc-300 backdrop-blur-md shadow text-zinc-800 font-medium text-base flex justify-center items-center">
          Climate Settings
        </div>
      </div>
      {/* Main solid section content */}
      <div className="text-black text-center">
        <h2 className="text-2xl font-semibold mb-4">Air Conditioning</h2>
        <p className="text-zinc-800">Climate control settings</p>
      </div>
    </div>
  );
}
