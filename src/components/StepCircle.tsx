import React from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

interface StepCircleProps {
  number: number;
  size?: number;        // diameter in px (optional)
  sizeSm?: number;      // diameter in px for small screens (optional)
}

const StepCircle: React.FC<StepCircleProps> = ({
  number,
  size = 80,     
  sizeSm = 48,    
}) => {
  const isMobile = useIsMobile();
  const actualSize = isMobile ? sizeSm : size;
  return (
    <div
      className="flex items-center justify-center font-bold bg-black/50 text-white rounded-full select-none"
      style={{
        width: actualSize,
        height: actualSize,
        fontSize: actualSize * 0.35,
      }}
    >
      {number}
    </div>
  );
};

export default StepCircle;
