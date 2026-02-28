'use client'
import Image from "next/image";
import {useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { easeInOut } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";

type NewsItem = {
    slug: string;
    title: string;
    heading: string;
    image: string;
    content: string;
    date: string;
};

const NewsItem = ({ item, activeArticle, setActiveArticle } : { item: NewsItem, activeArticle: string | null, setActiveArticle: React.Dispatch<React.SetStateAction<string | null>> }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6
  });
  
  // Arrow icon
  const arrowVariants = {
  rest: { x: 0, opacity: 1 },
  hover: {
    x: [0, 24, -24, 0],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.6,
      times: [0, 0.4, 0.41, 1],
      ease: easeInOut
    }
  }
};

  useEffect(() => {
    if (isInView) {
      setActiveArticle(item.slug);
    }
  }, [isInView, item.slug, setActiveArticle]);

  return (
   <motion.div ref={ref} key={item.slug} initial="rest"
  whileHover="hover"
  animate="rest" className="group z-10 pt-5 border-t border-ink dark:border-rose flex justify-between cursor-pointer">
                <div className="flex max-md:flex-col gap-6">
                <div className="lg:w-140 lg:h-90 w-full relative overflow-hidden">
                <Image src={item.image} alt={item.title} width={400} height={400} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-300" />
                </div>
                <div className="flex flex-col justify-between gap-8">
                <h3 className="lg:text-4xl text-3xl lg:font-bold font-semibold max-md:tracking-tight font-plus uppercase group-hover:underline underline-offset-3 decoration-4">{item.title}</h3>
                <div className="flex justify-between items-center">
                <p className="text-sm text-ink dark:text-rose uppercase"><span className="font-bold">press</span> {item.date}</p>
                <motion.div variants={arrowVariants}>
    <IoArrowForwardOutline className="text-3xl lg:hidden" />
  </motion.div>
  </div>
                </div>
              </div>
               <motion.div variants={arrowVariants}>
    <IoArrowForwardOutline className="text-4xl max-md:hidden" />
  </motion.div>
              </motion.div>
  );
};

export default NewsItem;