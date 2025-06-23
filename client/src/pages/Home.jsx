import React from "react";
import Navbar from "../components/Navbar";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Navbar />
    <div className="home">
      <video 
        src="/1851190-uhd_3840_2160_25fps.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="bg-video"
      />
    </div>
    </>
  );
}
