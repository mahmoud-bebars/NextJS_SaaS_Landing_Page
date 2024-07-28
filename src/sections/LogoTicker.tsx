"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import plusLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="Acme" className="logo-ticker" />
            <Image src={quantumLogo} alt="Quantum" className="logo-ticker" />
            <Image src={echoLogo} alt="Echo" className="logo-ticker" />
            <Image
              src={celestialLogo}
              alt="Celestial"
              className="logo-ticker"
            />
            <Image src={plusLogo} alt="Plus" className="logo-ticker" />
            <Image src={apexLogo} alt="Apex" className="logo-ticker" />

            {/* Second Set of Logos */}
            <Image src={acmeLogo} alt="Acme" className="logo-ticker" />
            <Image src={quantumLogo} alt="Quantum" className="logo-ticker" />
            <Image src={echoLogo} alt="Echo" className="logo-ticker" />
            <Image
              src={celestialLogo}
              alt="Celestial"
              className="logo-ticker"
            />
            <Image src={plusLogo} alt="Plus" className="logo-ticker" />
            <Image src={apexLogo} alt="Apex" className="logo-ticker" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
