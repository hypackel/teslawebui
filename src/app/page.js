"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import CarPane from "./components/CarPane";
import MapPane from "./components/MapPane";
import ToolbarPane from "./components/ToolbarPane";

export default function Home() {
  const [carPaneWidth, setCarPaneWidth] = useState(40); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartWidth = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartWidth.current = carPaneWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const deltaX = e.clientX - dragStartX.current;
    const containerWidth = containerRect.width;
    const deltaPercent = (deltaX / containerWidth) * 100;
    const newWidth = Math.max(40, Math.min(100, dragStartWidth.current + deltaPercent));

    setCarPaneWidth(newWidth);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    // Snap to 40% or 100%
    const snappedWidth = carPaneWidth > 70 ? 100 : 40;

    if (snappedWidth === 100) {
      setIsTransitioning(true);
      // Clear transitioning state after animation completes
      setTimeout(() => setIsTransitioning(false), 300);
    }

    setCarPaneWidth(snappedWidth);
  }, [isDragging, carPaneWidth]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Top section with car and map panes - 90% height */}
      <div ref={containerRef} className="flex h-[90%] relative">
        {/* Car pane - dynamic width */}
        <div
          style={{
            width: carPaneWidth === 100 ? '100%' : `${carPaneWidth}%`,
            transition: isDragging ? 'none' : 'width 0.3s ease-in-out'
          }}
        >
          <CarPane />
        </div>

        {/* Resize handle - always positioned at right edge of car pane */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-2 h-8 bg-zinc-600 hover:bg-zinc-400 cursor-col-resize transition-colors rounded-sm z-10"
          style={{
            left: `calc(${carPaneWidth}% - 15px)`,
            transition: isDragging ? 'none' : 'left 0.3s ease-in-out'
          }}
          onMouseDown={handleMouseDown}
        ></div>

        {/* Map pane - show when car pane is not at 100% or during transition */}
        {(carPaneWidth < 100 || isTransitioning) && (
          <div
            style={{
              width: `${100 - carPaneWidth}%`,
              transition: isDragging ? 'none' : 'width 0.3s ease-in-out'
            }}
          >
            <MapPane />
          </div>
        )}
      </div>

      {/* Toolbar pane - 10% height, 100% width */}
      <div className="h-[10%]">
        <ToolbarPane />
      </div>
    </div>
  );
}
