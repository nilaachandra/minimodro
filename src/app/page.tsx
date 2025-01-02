"use client";

import { FlipClock } from "@/components/FlipClock";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { usePomodoro } from "@/hooks/usePomodro";
import { Settings } from "@/components/Settings";

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
      <div className="fixed top-4 right-4"></div>
      <div className="text-center space-y-8">
        <div className="space-x-4 mb-8">
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
        <h1>Lock In!</h1>
        <div className="space-x-4">
          <Button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</Button>
          <Button onClick={resetTimer} variant="outline">
            Reset
          </Button>
        </div>
        <div className="flex justify-between items-center mt-8">
          <Settings settings={settings} onSave={updateSettings} />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
