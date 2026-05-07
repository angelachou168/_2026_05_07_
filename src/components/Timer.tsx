import { useState, useEffect } from 'react';

interface TimerProps {
  label: string;
  themeColor: 'cyan' | 'rose';
}

export function Timer({ label, themeColor }: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const accentColor = themeColor === 'cyan' ? 'text-cyan-400' : 'text-rose-400';
  const bgColor = themeColor === 'cyan' ? 'from-[#0a0f1a] to-black' : 'from-[#1a0a0f] to-black';

  return (
    <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br ${bgColor} border-[5px] border-white/10 rounded-[10px] p-10`}>
      <h2 className={`mb-4 text-2xl font-bold uppercase tracking-widest ${themeColor === 'cyan' ? 'text-cyan-500' : 'text-rose-500'}`}>
        {label}
      </h2>
      <div className="text-7xl font-mono font-bold tracking-tighter text-white mb-10 drop-shadow-lg">
        {formatTime(seconds)}
      </div>
      <div className={`border ${themeColor === 'cyan' ? 'border-cyan-500/30' : 'border-rose-500/30'} rounded-xl p-1 grid grid-cols-3 gap-1 w-full`}>
        <button
          onClick={startTimer}
          disabled={isRunning}
          className={`py-2 text-xl font-bold uppercase tracking-tighter rounded-lg transition-all ${
            isRunning
              ? 'text-white/20 cursor-not-allowed'
              : themeColor === 'cyan'
                ? 'text-cyan-400 hover:bg-cyan-500/10'
                : 'text-rose-400 hover:bg-rose-500/10'
          }`}
        >
          開始
        </button>
        <button
          onClick={pauseTimer}
          disabled={!isRunning}
          className={`py-2 text-xl font-bold uppercase tracking-tighter rounded-lg transition-all ${
            !isRunning
              ? 'text-white/20 cursor-not-allowed'
              : themeColor === 'cyan'
                ? 'text-cyan-400 hover:bg-cyan-500/10'
                : 'text-rose-400 hover:bg-rose-500/10'
          }`}
        >
          暫停
        </button>
        <button
          onClick={resetTimer}
          className="py-2 text-xl font-bold text-white/50 uppercase tracking-tighter rounded-lg hover:bg-white/10 transition-all"
        >
          重設
        </button>
      </div>
    </div>
  );
}
