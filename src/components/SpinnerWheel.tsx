import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

export default function SpinnerWheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const colorMain = "#d5e100"; // Halo Green
  const colorLight = "#eef42a"; // Lighter Halo Green
  const primaryBlue = "#1a56db";
  const accentBlue = "#3b82f6";
  const white = "#ffffff";

  const totalSegments = numbers.length;
  const segmentAngle = 360 / totalSegments;

  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const radius = canvas.width / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // External Glow Ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    const ringGrad = ctx.createRadialGradient(centerX, centerY, radius - 20, centerX, centerY, radius);
    ringGrad.addColorStop(0, primaryBlue);
    ringGrad.addColorStop(0.5, accentBlue);
    ringGrad.addColorStop(1, primaryBlue);
    ctx.fillStyle = ringGrad;
    ctx.fill();

    for (let i = 0; i < totalSegments; i++) {
      const startAngle = (i * segmentAngle * Math.PI) / 180;
      const endAngle = ((i + 1) * segmentAngle * Math.PI) / 180;

      // Segment Gradient
      const grad = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, radius - 15);
      if (i % 2 === 0) {
        grad.addColorStop(0, colorMain);
        grad.addColorStop(1, "#c2cd00");
      } else {
        grad.addColorStop(0, colorLight);
        grad.addColorStop(1, colorMain);
      }

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius - 15, startAngle, endAngle);
      ctx.fillStyle = grad;
      ctx.fill();

      // Segment Brushing / Shine
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius - 15, startAngle, startAngle + (segmentAngle * 0.1 * Math.PI) / 180);
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fill();

      // Divider Lines
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + (radius - 15) * Math.cos(startAngle),
        centerY + (radius - 15) * Math.sin(startAngle)
      );
      ctx.strokeStyle = "rgba(26, 86, 219, 0.3)";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Numbers with Shadow
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + (segmentAngle * Math.PI) / 360);
      ctx.textAlign = "right";
      
      // Shadow for number
      ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      
      ctx.fillStyle = primaryBlue;
      ctx.font = "bold 64px 'Syne', sans-serif";
      ctx.fillText(numbers[i], radius - 70, 22);
      ctx.restore();
    }

    // Outer Decorative Dots
    for (let i = 0; i < 24; i++) {
      const dotAngle = (i * (360 / 24) * Math.PI) / 180;
      ctx.beginPath();
      ctx.arc(
        centerX + (radius - 8) * Math.cos(dotAngle),
        centerY + (radius - 8) * Math.sin(dotAngle),
        3, 0, Math.PI * 2
      );
      ctx.fillStyle = white;
      ctx.fill();
    }

    // Center Hub (3D Look)
    const hubGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
    hubGrad.addColorStop(0, white);
    hubGrad.addColorStop(0.3, accentBlue);
    hubGrad.addColorStop(1, primaryBlue);

    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.fillStyle = hubGrad;
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Small inner dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
    ctx.fillStyle = white;
    ctx.fill();
  }, [segmentAngle, totalSegments, numbers, colorMain, colorLight, primaryBlue, accentBlue, white]);

  useEffect(() => {
    drawWheel();
  }, [drawWheel]);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Wind-up rotation
    const windUp = -20;
    
    // Rigged Logic: 99% Chance for 1 or 2
    const chance = Math.floor(Math.random() * 100);
    let targetAngle: number;
    let finalResult: string;

    if (chance < 99) {
      const isOne = Math.random() < 0.5;
      targetAngle = isOne ? 247.5 : 202.5; // Centers for 1 and 2
      finalResult = isOne ? "1" : "2";
    } else {
      const randomIndex = Math.floor(Math.random() * 6) + 2;
      targetAngle = (360 - (randomIndex * segmentAngle) + 270) % 360;
      finalResult = numbers[randomIndex];
    }

    const fullSpins = 8;
    const totalRotation = (fullSpins * 360) + targetAngle;
    const newRotation = rotation + totalRotation;
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(finalResult);
      
      // Fire confetti
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[420px] mx-auto p-2 sm:p-4 relative font-syne">
      {/* 3D Result Banner */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute -top-16 xs:-top-12 z-50 bg-[#d5e100] text-[#1a56db] px-4 xs:px-8 py-2 xs:py-3 rounded-2xl font-black text-lg xs:text-2xl shadow-[0_10px_30px_rgba(213,225,0,0.5)] border-4 border-white whitespace-nowrap"
          >
            WINNER: NUMBER {result}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Pointer Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] scale-75 sm:scale-100">
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 60L40 0H0L20 60Z" fill="#1a56db" />
          <path d="M20 50L35 5H5L20 50Z" fill="#3b82f6" fillOpacity="0.5" />
          <circle cx="20" cy="15" r="5" fill="white" />
        </svg>
      </div>

      {/* Wheel Container with Motion */}
      <motion.div 
        animate={isSpinning ? { scale: [1, 0.97, 1], filter: ['blur(0px)', 'blur(1px)', 'blur(0px)'] } : {}}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="relative w-full aspect-square p-2 bg-[#1a56db] rounded-full shadow-[0_20px_50px_rgba(26,86,219,0.5),inset_0_2px_10px_rgba(255,255,255,0.4)] box-border overflow-hidden"
      >
        {/* Spinner Background Aura */}
        <motion.div
          animate={isSpinning ? { opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] } : { opacity: 0 }}
          className="absolute inset-0 bg-white rounded-full blur-3xl pointer-events-none"
        />

        <canvas
          ref={canvasRef}
          width="800"
          height="800"
          className="w-full h-full rounded-full block bg-white transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1)"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </motion.div>

      {/* Control Panel */}
      <div className="mt-10 w-full flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSpin}
          disabled={isSpinning}
          className={`
            w-full max-w-[280px] px-10 py-5 text-xl font-black rounded-2xl uppercase tracking-[2px] transition-all duration-300
            ${isSpinning 
              ? 'bg-blue-300 text-blue-700 cursor-not-allowed opacity-50' 
              : 'bg-[#1a56db] text-[#d5e100] shadow-[0_10px_0_#123e9e,0_15px_30px_rgba(26,86,219,0.3)] hover:shadow-[0_5px_0_#123e9e,0_10px_20px_rgba(26,86,219,0.3)] active:translate-y-[5px] active:shadow-[0_2px_0_#123e9e]'
            }
          `}
        >
          {isSpinning ? 'Good Luck!' : 'Raise your coupon'}
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div 
            key={isSpinning ? 'spinning' : 'idle'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-8 text-lg font-bold text-[#5B6E99] tracking-widest uppercase opacity-80"
          >
            {isSpinning ? 'The wheel is choosing...' : 'Spin for exclusive rewards' }
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
