import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, FC } from "react";

interface IProps {
  delay: number;
  direction: "Left" | "Rigth" | "Up" | "Down";
  fullWidth: boolean;
  padding: boolean;
  children: ReactNode;
  flexDirection: "column" | "row";
}

const fadeIn: FC<IProps> = ({
  children,
  delay,
  direction,
  fullWidth,
  padding,
  flexDirection,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
    return () => {};
  }, [isInView, control]);

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : "w-auto"} ${
        padding ? "px-10" : "px-0"
      } flex items-center justify-center ${flexDirection}`}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: direction == "Rigth" ? -100 : direction === "Left" ? 100 : 0,
            y: direction == "Up" ? 100 : direction == "Down" ? -100 : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial={"hidden"}
        animate={control}
        transition={{
          duration: 1.25,
          type: "tween",
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        className="w-full flex items-center justify-between"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default fadeIn;
