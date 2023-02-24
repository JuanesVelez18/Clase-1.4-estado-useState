import React, { useState } from "react";

const Counter = () => {
  /*
      La primera posición es nuestro estado: count
      La segunda posición es nuestra función de actualizacion: setCount
    */
  const [count, setCount] = useState(0);
  let fakeCount = 0;

  const increment = () => {
    fakeCount = fakeCount + 5;
    setCount(count + 5);
  };

  return (
    <div>
      <h1>
        El contador es: <span style={{ color: "#646cffaa" }}>{count}</span>
      </h1>
      <h2>
        Fake Count es: <span style={{ color: "red" }}>{fakeCount}</span>
      </h2>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Counter;
