"use client";

import CountUp from "react-countup";

interface CountUpAnimationProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export default function CountUpAnimation({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2.5,
}: CountUpAnimationProps) {
  return (
    <CountUp
      end={end}
      suffix={suffix}
      prefix={prefix}
      decimals={decimals}
      duration={duration}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}
