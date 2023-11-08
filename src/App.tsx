// import { motion } from "framer-motion";
// import FadeIn from "./components/fadein";
import BGM1 from "./assets/bgm1.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const rowsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (rowsRef.current) {
      rowsRef.current?.forEach((row, i) => {
        const rowWidth = row.getBoundingClientRect().height;
        const rowItemWidth = row.children[0].getBoundingClientRect().height;
        const initialOffset = ((2 * rowItemWidth) / rowWidth) * 100 * -1;
        const xTranslation = initialOffset * -1;
        gsap.set(row, {
          yPercent: `${initialOffset}`,
        });

        const duration = 50 * (i + 1);
        const tl = gsap.timeline();
        tl.to(row, {
          ease: "none",
          duration,
          yPercent: 0,
          repeat: -1,
        });
      });
    }
    return () => {};
  }, []);

  return (
    <div className="relative">
      <div
        className="h-screen relative w-full overflow-hidden "
        style={{
          background: `url(${BGM1})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="px-6 cb-traggel-row flex  whitespace-nowrap [writing-mode:vertical-lr]"
          ref={(el) => el && rowsRef.current?.push(el)}
        >
          <span className="px-2  basis-1/3	 grow-0  shrink-0	 z-20  text-white text-9xl text-fill-transparent relative  text-stroke-width font-semibold">
            Parrillada Finas Familiares
          </span>
          <span className="px-2 basis-1/3	 grow-0  shrink-0	 z-20   text-white text-9xl text-fill-transparent relative  text-stroke-width font-semibold">
            Parrillada Finas Familiares
          </span>
          <span className="px-2 basis-1/3	 grow-0  shrink-0	  z-20  text-white text-9xl text-fill-transparent relative  text-stroke-width font-semibold">
            Parrillada Finas Familiares
          </span>
          <span className="px-2 basis-1/3	 grow-0  shrink-0	  z-20  text-white text-9xl text-fill-transparent relative  text-stroke-width font-semibold">
            Parrillada Finas Familiares
          </span>
        </div>
        {/* <div className="[writing-mode:vertical-lr] h-screen text-white z-10 flex overflow-hidden gap-x-4 whitespace-nowrap">
          <p
            ref={firstText}
            className=" pt-2 text-6xl text-fill-transparent relative  text-stroke-width font-semibold "
          >
            Bebidas Frias - Bebidas Frias - Bebidas frias
          </p>
          <p
            ref={secondText}
            className="absolute top-full  border text-6xl text-fill-transparent    text-stroke-width font-semibold "
          >
            Bebidas Frias
          </p> */}
      </div>
      {/* <FadeIn
          flexDirection="column"
          delay={0.2}
          direction="Down"
          fullWidth={true}
          padding={true}
        >
          <div className="">
            <h2 className="mt-[90px] text-center text-6xl text-fill-transparent  text-stroke-width	 font-bold leading-tight text-white xs:text-[64px]  max-w-[1050px]">
              Delicioso Capuccino premium
            </h2>
          </div>
          
        </FadeIn> */}

      {/* <FadeIn
          flexDirection="row"
          delay={0.2}
          direction="Down"
          fullWidth={true}
          padding={true}
        >
          <ul className="mt-5 bg-[#4B6D31] opacity-95 px-2">
            <li className="text-2xl font-semibold text-yellow-400 flex items-center gap-x-2">
              <span>Chocolate Caliente</span>{" "}
              <span>------------------------</span> <span>$1.20</span>
            </li>
            <li className="text-2xl font-semibold text-yellow-400 flex items-center gap-x-2">
              <span>Chocolate Caliente</span>{" "}
              <span>------------------------</span> <span>$1.20</span>
            </li>
            <li className="text-2xl font-semibold text-yellow-400 flex items-center gap-x-2">
              <span>Chocolate Caliente</span>{" "}
              <span>------------------------</span> <span>$1.20</span>
            </li>
            <li className="text-2xl font-semibold text-yellow-400 flex items-center gap-x-2">
              <span>Chocolate Caliente</span>{" "}
              <span>------------------------</span> <span>$1.20</span>
            </li>
            <li className="text-2xl font-semibold text-yellow-400 flex items-center gap-x-2">
              <span>Chocolate Caliente</span>{" "}
              <span>------------------------</span> <span>$1.20</span>
            </li>
          </ul>
        </FadeIn> */}
      {/* </div> */}
    </div>
  );
};

export default Header;

/**
 * <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        delay: 0.2,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">Ollie</div>
        <h2 className="text-9xl">Test de pruebas</h2>
        {new URL("./Img/paper_bg.jpg", import.meta.url).href}
        <img
          src={new URL("./assets/bgm1.jpg", import.meta.url).href}
          className="border border-red-300 h-screen w-100%"
          alt=""
        />

      </div>
    </motion.div>
 */

/**
 * 
 * <div className="grid columns-2">
          
          <div className="w-full rotate-90">
            
            <h2 className="mt-[90px] text-center text-5xl font-bold leading-tight text-white xs:text-[64px]  max-w-[1050px]">
              Bebidas frias
            </h2>
            
            <h2 className="mt-[90px] text-center text-5xl font-bold leading-tight text-white xs:text-[64px]  max-w-[1050px]">
              Bebidas frias
            </h2>
          </div>
        </div>
 */
