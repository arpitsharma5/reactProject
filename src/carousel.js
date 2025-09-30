import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import {useEffect, useState} from "react";

function Carousel() {

  const [current, setCurrent] = useState(0);
  const sampleImage = [
      image1, image2, image3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(idx => {
        console.log(idx);
        return (idx + 1) % sampleImage.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [sampleImage.length]);


  const goToPrev = (delta) => {
    if(current === 0) {
      setCurrent(sampleImage.length - 1);
    } else {
      setCurrent(current+delta);
    }
  };

  const goToNext = (delta) => {
    if(current === sampleImage.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current+delta)
    }
  };

  return(
      <div style={{textAlign: 'center'}}>
        <img
        src={sampleImage[current]}
        alt={`Slide ${current + 1}`}
        style={{ width: '600px', height: '250px', objectFit: 'cover' }}
        />
        <div>
          <button onClick={() => goToPrev(-1)}>Prev</button>
          <button onClick={() => goToNext(+1)}>Next</button>
        </div>
      </div>
  )
}

export default Carousel;