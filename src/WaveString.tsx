import React, { useState, useEffect } from 'react';

interface WaveStringProps {
  s: string;
}

function WaveString({ s }: WaveStringProps) {
  const [revertedString, setRevertedString] = useState<string>(s);

  useEffect(() => {
    const timer = setInterval(() => {
      setRevertedString((prevString: string) => {
        return prevString[prevString.length - 1] + prevString.substring(0, prevString.length - 1);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [s]);

  return (
    <div>
      <p>{revertedString}</p>
    </div>
  );
}

export default WaveString;
