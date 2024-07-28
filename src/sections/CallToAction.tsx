"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const traslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="  bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title mt-5">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>{" "}
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            height={360}
            className="hidden md:block lg:block absolute -left-[350px] -top-[137px]"
            style={{ translateY: traslateY }}
          />{" "}
          <motion.img
            src={springImage.src}
            alt="Spring image"
            height={360}
            width={360}
            className="hidden md:block lg:block absolute -right-[331px] -top-[19px]"
            style={{ translateY: traslateY }}
          />
        </div>{" "}
      </div>
      <div className="flex gap-2 items-center justify-center mt-[30px]">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn more</span>{" "}
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
        </button>
      </div>
    </section>
  );
};
