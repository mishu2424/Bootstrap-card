import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Boot from '../Boot/Boot';
const Main = () => {
    /* const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
    //   config: config.molasses,
      onRest: () => set(!flip),
    }) */
/*     const [flip, set] = useState(false)
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 1,
    delay: 200,
    onRest: () => set(!flip),
  }) */
    return (
        <div>
            {/* <animated.h1 style={props}>hello</animated.h1> */}
           <Boot></Boot>
         {/*   <animated.svg
      style={{ margin: 20, width: 80, height: 80 }}
      viewBox="0 0 45 44"
      strokeWidth="2"
      fill="white"
      stroke="rgb(45, 55, 71)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={156}
      strokeDashoffset={x.to(x => (1 - x) * 156)}> */}
      {/* <polygon points={POINTS} /> */}
    {/* </animated.svg> */}
        </div>
    );
};

export default Main;