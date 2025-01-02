import { formatTime } from "@/lib/timeformat";

interface FlipClockProps {
  timeLeft: number;
}

export function FlipClock({ timeLeft }: FlipClockProps) {
  return (
    <div className="text-8xl font-bold tabular-nums">
      {formatTime(timeLeft)}
    </div>
  );
}

