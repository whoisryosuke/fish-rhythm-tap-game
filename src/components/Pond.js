import React, { useState, useEffect } from "react";

import ClickBox from "./ClickBox";

const Pond = () => {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [gameStatus, setGameStatus] = useState(true);

  const createBox = () => {
    // console.log("creating a box!");
    const box = {
      id: count,
      width: Math.round(Math.floor(Math.random() * 100) + 25),
      _x: 480
    };

    // console.log("the box", box);
    setCount(count + 1);
    setBoxes([...boxes, box]);

    // Pick a random time, and make another box
    // Unless game has ended
    // if (gameStatus == true) {
    //   console.log("create another box!");
    //   setTimeout(createBox, Math.random() * 3000);
    // }
  };

  // Creates the first box
  useEffect(() => {
    let createFirstBox = setTimeout(createBox, 1000);

    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => {
      clearTimeout(createFirstBox);
    };
  }, []);

  // Move boxes on each tick
  useEffect(
    () => {
      if (Array.isArray(boxes) && boxes.length > 0) {
        const newBoxes = boxes
          .filter(
            box =>
              box._x + 10 <=
              Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              )
          )
          .map(box => {
            console.log(box._x);
            if (box._x + 10 != NaN) return { ...box, _x: box._x + 10 };
          });
        console.log("newboxes", newBoxes);
        console.log("boxes", boxes);
        setBoxes([...newBoxes]);
      }
    },
    [boxes]
  );

  return boxes.map(box => (
    <ClickBox key={box.id} width={box.width} position={box._x} />
  ));
};

export default Pond;
