import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import Loader from "./svgs/Loader";
const Scene = ({ isPause, isMuted }) => {
  const [resize, setResize] = useState("large");


  const handleResize = () => {
    let newSize;
    if (window.innerWidth <= 575) {
      newSize = "small";
    } else if (window.innerWidth <= 768) {
      newSize = "medium";
    } else if (window.innerWidth <= 1024) {
      newSize = "large";
    } else {
      newSize = "extraLarge";
    }
    setResize(newSize)
  };


  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Canvas camera={{ fov: 20, position: [0, 0, 110] }}>
      <Suspense
        fallback={<Loader className="h-8 w-8 fill-white animate-spin" />}
      >
        <Environment files={["./studio_small.hdr"]} />
        <ScrollControls pages={3} damping={0.1}>
          <MacContainer isPause={isPause} isMuted={isMuted} resize={resize}/>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
