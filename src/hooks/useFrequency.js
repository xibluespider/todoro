import React, { useEffect, useRef, useState } from "react";

function useFrequency({ type = "center", oscType = "sine", gain = 1, hz }) {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const o = useRef(null);
  const g = useRef(null);

  const initializeAudioContext = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();

    o.current = oscillator;
    g.current = gainNode;

    // Set initial values
    o.current.type = oscType;
    o.current.frequency.value = hz;
    g.current.gain.value = gain;

    ctxRef.current = ctx;
    ctx.suspend();
  };

  useEffect(() => {
    if (o.current) o.current.type = oscType;
  }, [oscType]);

  useEffect(() => {
    if (o.current) o.current.frequency.value = hz;
  }, [hz]);

  useEffect(() => {
    if (g.current) g.current.gain.value = gain;
  }, [gain]);

  const toggle = () => {
    if (!ctxRef.current) {
      initializeAudioContext();
    }
    if (playing) ctxRef.current?.suspend();
    else ctxRef.current?.resume();
    setPlaying((play) => !play);
  };

  const start = () => {
    if (!ctxRef.current) {
      initializeAudioContext();
    }
    if (!playing) ctxRef.current?.resume();
    setPlaying(true);
  };

  const stop = () => {
    if (playing) ctxRef.current?.suspend();
    setPlaying(false);
  };

  return { toggle, start, stop, playing };
}

export default useFrequency;
