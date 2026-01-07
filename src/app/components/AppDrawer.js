export default function AppDrawer({ isOpen, drawerRef }) {
  return (
    <div
      ref={drawerRef}
      className={`bg-black rounded-lg absolute left-1/2 transform -translate-x-1/2 w-[50%] h-[50%] flex items-center justify-center transition-all duration-300 ease-out z-50 ${
        isOpen ? 'bottom-[2%] translate-y-0' : 'bottom-[0%] translate-y-[calc(100%+0.5rem)]'
      }`}
    >
      <div className="text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">App Drawer</h2>
        <p className="text-zinc-300">Application drawer content</p>
      </div>
    </div>
  );
}

