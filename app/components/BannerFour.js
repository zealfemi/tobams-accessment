import Image from "next/image";
import { IoFlashOutline } from "react-icons/io5";
import LinkButton from "./LinkButton";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function BannerFour() {
  return (
    <div className="p-6 md:py-16 lg:px-16 bg-[#57124410]">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-[#571244]">Training The Consultant</h2>
          <p className="text-[#571244] font-semibold mt-2">
            Maximise Your Potential as a Certified Trainer:
          </p>

          <p className="my-6">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>
        </div>

        <div>
          <div className="text-white h-full bg-[#571244] p-5 lg:py-8 grid md:grid-cols-2 gap-5 rounded-lg">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Expert-Led Learning</h4>
              <p>
                Gain insight from seasoned professionals in the field as they
                mentor you through the subtleties of business analysis.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Interactive Workshops</h4>
              <p>
                Engage in hands-on workshops designed to enhance your training
                capabilities and provide practical insights.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Comprehensive Curriculum</h4>
              <p>
                Access a robust curriculum that covers fundamental principles
                and advanced methodologies, ensuring a well-rounded
                understanding.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Global Recognition</h4>
              <p>
                You will attain a globally recognized certification, opening
                doors to new career opportunities and industry recognition.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <LinkButton href="#">
              <span className="flex items-center">
                Learn More <IoIosArrowForward className="ml-1 lg:hidden" />{" "}
                <HiMiniArrowUpRight className="hidden lg:flex ml-1 text-[18px]" />
              </span>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
