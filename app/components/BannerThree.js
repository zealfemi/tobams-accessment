import Image from "next/image";
import { IoFlashOutline } from "react-icons/io5";
import LinkButton from "./LinkButton";

export default function BannerThree() {
  return (
    <div className="p-6 md:py-16 lg:px-16 ">
      <div className="bg-[#EF435320] rounded-[20px] p-4 lg:p-10 flex flex-col gap-6">
        <div>
          <p className="italic text-[#1671D9] font-semibold">
            Learning With Our CEO:
          </p>

          <h3 className="text-[#571244] mt-2">
            Transformation Hub With Jite Newton
          </h3>

          <p className="my-6">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Image
            src="/images/image-7.png"
            alt="Management Development Program"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="text-black h-full bg-[#FFFFFF30] p-5 lg:py-8">
            <ul className="flex flex-col flex-wrap gap-x-6 gap-y-3 w-full">
              <li className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl p-4">
                <IoFlashOutline className="text-[#571244]" /> Strategic Career
                Guidance
              </li>
              <li className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl p-4">
                <IoFlashOutline className="text-[#571244]" />
                Leadership Development
              </li>
              <li className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl p-4">
                <IoFlashOutline className="text-[#571244]" /> CV Development
              </li>
              <li className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl p-4">
                <IoFlashOutline className="text-[#571244]" /> Sustainability
                Leadership
              </li>
              <li className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl p-4">
                <IoFlashOutline className="text-[#571244]" /> Communication
                Skills
              </li>
              <li className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl p-4">
                <IoFlashOutline className="text-[#571244]" /> Business Model
              </li>
            </ul>

            <div className="mt-6">
              <LinkButton href="#" icon>
                Learn More
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
