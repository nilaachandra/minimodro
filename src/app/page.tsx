"use client";

import { FlipClock } from "@/components/FlipClock";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { usePomodoro } from "@/hooks/usePomodro";
import { Settings } from "@/components/Settings";
import Footer from "@/components/Footer";

const initialSettings = {
  pomodoro: 16,
  shortBreak: 4,
  longBreak: 8,
};

export default function Pomodoro() {
  const {
    mode,
    setMode,
    timeLeft,
    isRunning,
    toggleTimer,
    resetTimer,
    settings,
    updateSettings,
  } = usePomodoro(initialSettings);

  const modes = ["pomodoro", "shortBreak", "longBreak"] as const;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {modes.map((m) => (
            <Button
              key={m}
              onClick={() => setMode(m)}
              variant={mode === m ? "default" : "outline"}
            >
              {m.replace(/([A-Z])/g, " $1").trim()}
            </Button>
          ))}
        </div>
        <FlipClock timeLeft={timeLeft} />
        <h1 className="mb-8">Lock In!</h1>
        <div className="grid grid-cols-3 gap-4">
          <Button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</Button>
          <Button onClick={resetTimer} variant="outline">
            Reset
          </Button>
          <Settings settings={settings} onSave={updateSettings} />
        </div>
        <div className="flex justify-between items-center mt-8">
        </div>
      </div>
    </div>
  );
}
