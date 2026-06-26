"use client";

import { useEffect, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIKLMNOPQRSTUVXYZ0123456789$+-*/%&@#<>[]{}";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrambleText({ text, delay = 0, duration = 2000, className }: ScrambleTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = 60; // Approximate frames for the duration
    const interval = duration / totalFrames;

    setIsAnimating(true);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\n") return char;
          if (progress > (index / text.length)) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayedText(scrambled);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setDisplayedText(text);
        setIsAnimating(false);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [text, duration]);

  useEffect(() => {
    const timeout = setTimeout(scramble, delay);
    return () => clearTimeout(timeout);
  }, [scramble, delay]);

  return <span className={className}>{displayedText || text.replace(/./g, " ")}</span>;
}
