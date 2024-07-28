"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const traslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        {" "}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className=" relative">
          <Image src={productImage} alt="Product image" className=" mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block lg:block absolute -right-36 -top-32"
            style={{ translateY: traslateY }}
          />{" "}
          <motion.img
            src={tubeImage.src}
            alt="Pyramid image"
            height={248}
            width={248}
            className="hidden md:block lg:block absolute bottom-24 -left-36"
            style={{ translateY: traslateY }}
          />
        </div>
      </div>
    </section>
  );
};
