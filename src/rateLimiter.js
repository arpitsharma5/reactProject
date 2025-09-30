import {useState} from "react";

function RateLimiter() {

  const [cooldown, setCooldown] = useState(0);

  const handleClick = () => {
    if(cooldown > 0) return;
    setCooldown(2);
    const interval = setInterval(() => {
      setCooldown(prev => {
        if(prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return (
      <div>
        <button onClick={handleClick} disabled={cooldown > 0}>
          {cooldown > 0 ? `Retry in ${cooldown}s` : "Click Me "}
        </button>
      </div>
  )

}

export default RateLimiter;