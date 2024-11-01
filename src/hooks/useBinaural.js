import { useState, useEffect } from "react";
import useFrequency from "./useFrequency"; // Adjust the path as necessary

export default function useBinaural() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [leftFreq, setLeftFreq] = useState(144);
  const [rightFreq, setRightFreq] = useState(144);
  const [volume, setVolume] = useState(15);

  const { start: startLeft, stop: stopLeft } = useFrequency({
    type: "left",
    oscillator: "sine",
    gain: volume / 100,
    hz: leftFreq,
  });

  const { start: startRight, stop: stopRight } = useFrequency({
    type: "right",
    oscillator: "sine",
    gain: volume / 100,
    hz: rightFreq,
  });

  useEffect(() => {
    if (isPlaying) {
      startLeft();
      startRight();
    } else {
      stopLeft();
      stopRight();
    }
  }, [isPlaying, leftFreq, rightFreq, volume]);

  return {
    isPlaying,
    setIsPlaying,
    leftFreq,
    setLeftFreq,
    rightFreq,
    setRightFreq,
    volume,
    setVolume,
  };
}
