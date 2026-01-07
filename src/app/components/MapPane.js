"use client";

import { LoadScript, GoogleMap } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.679472,
  lng: -122.388389,
};

export default function MapPane() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <div className="bg-zinc-700 h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Google Maps</h2>
          <p className="text-zinc-300">Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env file</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={{
            disableDefaultUI: true,
            styles: [
              {
                elementType: "geometry",
                stylers: [{ color: "#1a1a1a" }],
              },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1a1a1a" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#2c2c2c" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f1f1f" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#8a8a8a" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#000000" }],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#1a1a1a" }],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#1f1f1f" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#1f1f1f" }],
              },
            ],
          }}
        />
      </LoadScript>
    </div>
  );
}
