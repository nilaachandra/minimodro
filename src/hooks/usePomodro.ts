import { useState, useEffect, useCallback } from 'react';

type PomodoroMode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface PomodoroSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export function usePomodoro(initialSettings: PomodoroSettings) {
  const [settings, setSettings] = useState<PomodoroSettings>(initialSettings);
  const [mode, setMode] = useState<PomodoroMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(settings.pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);

  const resetTimer = useCallback(() => {
    setTimeLeft(settings[mode] * 60);
    setIsRunning(false);
  }, [mode, settings]);

  useEffect(() => {
    resetTimer();
  }, [mode, settings, resetTimer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning((prev) => !prev);
  const updateSettings = (newSettings: PomodoroSettings) => setSettings(newSettings);

  return {
    mode,
    setMode,
    timeLeft,
    isRunning,
    toggleTimer,
    resetTimer,
    settings,
    updateSettings,
  };
}

