import React, { useState } from "react";
import Scene from "./components/Scene";
import PlayIcon from "./components/svgs/PlayIcon";
import PauseIcon from "./components/svgs/PauseIcon";
import Mute from "./components/svgs/Mute";
import Unmute from "./components/svgs/Unmute";
import ScrollDown from "./components/svgs/ScrollDown";

const App = () => {
  const [isPause, setIsPause] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const handlePause = () => {
    setIsPause(!isPause);
  };
  const handleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <main className="bg-black">
      <section className="text-white relative z-10 flex flex-col items-center justify-center pt-8">
        <h2 className="text-6xl md:text-8xl font-semibold">MacBook Pro</h2>
        <p className="pt-4 text-2xl">
          Offical Youtube Video 
        </p>
      </section>

      <section className="absolute inset-0 w-full h-screen ">
        <Scene isPause={isPause} isMuted={isMuted} />
      </section>
      <section className="flex items-center justify-center gap-8 pt-4 absolute z-20 bottom-8 left-1/2 -translate-x-1/2 w-full">
        <button
          onClick={handlePause}
          className="h-12 w-12 flex items-center justify-center rounded-full border opacity-80 transition-all hover:opacity-100"
        >
          {isPause ? (
            <PlayIcon className="h-4 w-4 fill-white" />
          ) : (
            <PauseIcon className="h-4 w-4 fill-white" />
          )}
        </button>
      
        <button
          onClick={handleMute}
          className="h-12 w-12 flex items-center justify-center rounded-full border opacity-80 transition-all hover:opacity-100"
        >
          {isMuted ? (
            <Mute className="h-4 w-4 fill-white" />
          ) : (
            <Unmute className="h-4 w-4 fill-white" />
          )}
        </button>

        <ScrollDown className=" absolute right-0 w-16 animate-bounce fill-white opacity-60" />
      </section>
    </main>
  );
};

export default App;
