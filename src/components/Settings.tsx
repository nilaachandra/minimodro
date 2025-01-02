import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface SettingsProps {
  settings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  onSave: (newSettings: { pomodoro: number; shortBreak: number; longBreak: number }) => void;
}

export function Settings({ settings, onSave }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    onSave(localSettings);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Timer Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(localSettings).map(([key, value]) => (
            <div key={key} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={key} className="text-right capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </Label>
              <Input
                id={key}
                type="number"
                value={value}
                onChange={(e) =>
                  setLocalSettings((prev) => ({ ...prev, [key]: parseInt(e.target.value) || 0 }))
                }
                className="col-span-3"
              />
            </div>
          ))}
        </div>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogContent>
    </Dialog>
  );
}

