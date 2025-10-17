import React from "react";

interface DotTrailProps {
  direction?: "left" | "right";
  trailColor?: string;     
  width?: number;    
  circleColor: string;
}

export default function DotTrail({
  direction = "right",
  trailColor = "blue",
  circleColor ,
  width = 80,
}: DotTrailProps) {
  const trailFrom = trailColor;
  const trailTo = `to-transparent`;

  return (
    <div className="flex items-center">
      {direction === "right" && (
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full ${circleColor}`} />
          <div
            style={{ width: `${width}px` }}
            className={`h-2 -ml-2 rounded-r-full bg-gradient-to-r ${trailFrom} ${trailTo}`}
          />
        </div>
      )}
      {direction === "left" && (
        <div className="flex items-center">
          <div
            style={{ width: `${width}px` }}
            className={`h-2 rounded-l-full bg-gradient-to-l ${trailFrom} ${trailTo}`}
          />
          <div className={`w-5 h-5 rounded-full ${circleColor}`} />
        </div>
      )}
    </div>
  );
}
