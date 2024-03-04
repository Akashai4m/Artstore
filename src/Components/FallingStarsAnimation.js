import React,{useState ,useEffect} from "react";

const FallingFlowersAnimation = () => {

    const [flowers, setFlowers] = useState([]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const newFlower = {
          x: Math.random() * window.innerWidth,
          y: -50,
          size: Math.random() * 50 + 20,
          color: "transparent",
        };
        setFlowers((flowers) => [...flowers, newFlower]);
      }, 500);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "100vw", zIndex: 1 }}>
        {flowers.map((flower, index) => (
          <flower key={index} x={flower.x} y={flower.y} size={flower.size} color={flower.color} />
        ))}
      </div>
    );
  };
  
export default FallingFlowersAnimation