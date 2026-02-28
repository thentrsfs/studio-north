import { news } from "@/app/data/news";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";
import { motion } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { easeInOut } from "motion/react";
import { useEffect, useRef } from "react";

const NewsSection = () => {
  const articleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const arrowVariants = {
    rest: { x: 0, opacity: 1 },
    hover: {
      x: [0, 24, -24, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.4, 0.41, 1],
        ease: easeInOut,
      },
    },
  };

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        rootMargin: "-10% 0px -10% 0px",  
        threshold: 1,
      }
    );

    articleRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="lg:px-24 px-6 py-32 lg:pt-60 lg:pb-80">
      <div className="flex justify-between items-center">
        <h2 className="lg:text-5xl font-bold font-plus uppercase text-2xl lg:leading-normal leading-tight max-w-30">
          Featured News
        </h2>
        <CustomButton className="mt-5" text="View all" />
      </div>

      <div className="mt-14 flex flex-col lg:gap-16 gap-4">
        {news.map((item, i) => (
          <motion.div
            key={item.slug}
            ref={(el) => {articleRefs.current[i] = el}}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="article group z-10 pt-5 border-t border-ink dark:border-rose flex justify-between cursor-pointer"
          >
            <div className="flex max-md:flex-col gap-6">
              <div className="lg:w-140 lg:h-90 w-full relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover scale-110 transition-all duration-300 group-hover:scale-100 group-[.active]:scale-100"
                />
              </div>

              <div className="flex flex-col justify-between gap-8">
                <h3 className="lg:text-4xl text-3xl lg:font-bold font-semibold max-md:tracking-tight font-plus uppercase underline-offset-3 decoration-4 transition-all duration-300 group-hover:underline group-[.active]:underline">
                  {item.title}
                </h3>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-ink dark:text-rose uppercase">
                    <span className="font-bold">press</span> {item.date}
                  </p>

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
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
