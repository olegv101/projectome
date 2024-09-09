"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LoadingAnimation from "./components/LoadingAnimation";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { ContainerScroll } from "./components/ui/container-scroll-animation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingAnimation isLoading={isLoading} />
      {!isLoading && (
        <main className="flex flex-col items-center justify-start min-h-screen bg-white relative">
          <Navbar />
          <div className="flex-grow flex items-center justify-center w-full mb-[12vh]">

            <motion.div 
              className="relative w-full min-h-screen" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.65 }}
            >
              <Image
                src="/assets/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </motion.div>
          </div>
          <div className="min-w-xl md:w-4xl">
            <ContainerScroll
              titleComponent={
                <div className="flex flex-col items-center">
                  <span className="text-sm font-normal uppercase tracking-wider mb-2 px-3 py-1 border-[1px] border-black/80 rounded-full text-black/80">
                    Personalised
                  </span>
                  <h1 className="text-5xl font-bold text from-black/80 to-black/80 text-black/80 mb-4">
                    All Your Health, here.
                  </h1>
                </div>
              }
            >
              <div className="h-full w-full bg-white flex flex-col items-center justify-center text-black">
                <img
                  src="https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/66b0939b0243e4472cba6cfe_66855134df743f926d26eab4_img-05.webp"
                  alt="Product"
                  width={1000}
                  height='auto'
                  className="rounded-lg mb-4"
                />
              </div>
            </ContainerScroll>
          </div>
        </main>
      )}
    </>
  );
}
