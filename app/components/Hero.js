import Image from "next/image";
import LinkButton from "./LinkButton";

export default function Hero() {
  return (
    <div>
      <div className="relative  w-full">
        <Image
          src="/images/image-1.png"
          alt="hero image"
          loading="eager"
          fill
          className="object-cover"
        />

        <div className="relative h-full w-full px-6 py-10 md:px-16 md:py-28 bg-[#00000070] flex flex-col gap-12.5 items-center justify-center text-center text-white">
          <div className="flex flex-col gap-3 items-center justify-center text-center max-w-[1000px]">
            <span className="bg-[#FFFFFF10] px-12 py-3 rounded-full uppercase">
              what we do
            </span>
            <h1 className="text-[24px] md:text-[56px]">
              Training and Development
            </h1>
            <p>
              Our comprehensive range of programs and resources is designed to
              enhance skills, broaden knowledge, and propel careers forward in
              today&apos;s ever-evolving landscape.
            </p>
          </div>
          <LinkButton href="#">Book a Consultation</LinkButton>
        </div>
      </div>
    </div>
  );
}
