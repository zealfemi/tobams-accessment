"use client";

import { useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider({ data }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {data.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full md:min-w-[calc(33.333%-1rem)] snap-start bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-[#EF4353] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-[#696969]">{testimonial.role}</p>
                </div>
              </div>
              <p className="leading-relaxed mt-6">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button
          onClick={() => scroll("left")}
          className="bg-[#F0435410] text-[#EF4353] hover:bg-[#F0435430] transition rounded-lg  cursor-pointer w-8 h-8 grid place-items-center"
          aria-label="Previous Slide">
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-[#F0435410] text-[#EF4353] hover:bg-[#F0435430] transition rounded-lg cursor-pointer w-8 h-8 grid place-items-center"
          aria-label="Next Slide">
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}
