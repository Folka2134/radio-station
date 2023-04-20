import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import { presenters } from "../presenters";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className=" overflow-hidden">
      <motion.h1
        ref={carousel}
        className="carousel cursor-move overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {presenters.map((presenter, keyId) => (
            <motion.div
              key={keyId}
              className="item h-[14rem] min-w-[10rem] py-8 px-2"
            >
              <img
                className="w-full h-full border-2 border-black pointer-events-none rounded-xl"
                src={presenter.image}
                alt="presenter"
              />
              <p className="text-xs whitespace-nowrap flex-1 pt-2">
                {presenter.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.h1>
    </div>
  );
};

export default Carousel;
