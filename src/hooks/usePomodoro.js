import { useState, useRef, useEffect } from "react";

const formatSecondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export default function usePomodoro() {
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);
  const alarmRef = useRef(null);

  const [workTimeLimit, setWorkTimeLimit] = useState(25);
  const [breakTimeLimit, setBreakTimeLimit] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWork, setIsWork] = useState(true);

  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);

  const startTimer = () => {
    if (!isPlaying) return;

    const decrementTimer = () => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft > 0) return prevTimeLeft - 1;

        setIsPlaying(false);
        setIsAlarmPlaying(true);
        return 0;
      });
    };

    timerRef.current = setInterval(decrementTimer, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    loadTimerEffect();
    setIsPlaying((prev) => false);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsPlaying((prev) => false);
  };

  const startAlarm = () => {
    if (!alarmRef.current) {
      alarmRef.current = new Audio("./alarm.wav");
      alarmRef.current.loop = true;
      alarmRef.current.volume = 0.5;
    }
    alarmRef.current.play();
  };

  const stopAlarm = () => {
    if (alarmRef.current) {
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0;
    }
    setIsAlarmPlaying((prev) => false);
    resetTimer();
  };

  const playAlarmToggleEffect = () => {
    if (isAlarmPlaying) startAlarm();

    if (!isAlarmPlaying) stopAlarm();
  };
  useEffect(playAlarmToggleEffect, [isAlarmPlaying]);

  const loadTimerEffect = () => {
    const time_left = isWork ? workTimeLimit : breakTimeLimit;
    setTimeLeft((prev) => time_left * 60);
  };
  useEffect(loadTimerEffect, [isWork, breakTimeLimit, workTimeLimit]);

  const playTimerToggleEffect = () => {
    if (isPlaying) startTimer();

    if (!isPlaying) pauseTimer();

    return () => clearInterval(timerRef.current);
  };
  useEffect(playTimerToggleEffect, [isPlaying]);

  return {
    workTimeLimit,
    setWorkTimeLimit,

    breakTimeLimit,
    setBreakTimeLimit,

    isPlaying,
    setIsPlaying,

    isAlarmPlaying,
    setIsAlarmPlaying,

    isWork,
    setIsWork,

    timeLeft,
    formatSecondsToMinutes,

    pauseTimer,
    resetTimer,
    stopAlarm,
  };
}
