import Image from "next/image";
import logo from "@/assets/logosaas.png";

import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className=" container">
        <div className="inline-flex  relative befor:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] ">
          <Image
            src={logo}
            alt="SaaS Logo"
            height={60}
            width={60}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row lg:flex-row gap-6 justify-center items-center mt-6">
          {["about", "features", "customers", "pricing", "help", "careers"].map(
            (link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm capitalize text-white/60"
              >
                {link}
              </a>
            ),
          )}
        </nav>
        <div className="flex items-center justify-center gap-6 mt-6">
          <a className="" href="www.x.com">
            <SocialX />
          </a>
          <a className="" href="www.instagram.com">
            <SocialInsta />
          </a>
          <a className="" href="www.linkedin.com">
            <SocialLinkedin />
          </a>
          <a className="" href="www.pintrest.com">
            <SocialPin />
          </a>
          <a className="" href="www.youtube.com">
            <SocialYoutube />
          </a>
        </div>
        <p className="t mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
