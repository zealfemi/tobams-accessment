import Image from "next/image";
import { IoFlash } from "react-icons/io5";

export default function BannerTwo() {
  return (
    <div className="p-6 md:py-16 lg:px-16 bg-[#69696910]">
      <div className="bg-[#2C0922] rounded-[20px] p-4 lg:p-10 grid md:grid-cols-2 gap-6">
        <h3 className="md:hidden text-white">Management Development Program</h3>

        <Image
          src="/images/image-6.png"
          alt="Management Development Program"
          width={500}
          height={500}
          className="w-full aspect-square object-cover rounded-lg"
        />

        <div className="text-white flex flex-col gap-6">
          <h2 className="hidden md:block text-white">
            Management Development Program
          </h2>

          <p>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive.
          </p>
          <p>
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          <ul className="flex flex-col flex-wrap gap-6 w-full">
            <li className="flex items-center gap-2 bg-[#8F6182] rounded-lg py-1 px-2">
              <IoFlash /> Enhanced Leadership Skills
            </li>
            <li className="flex items-center gap-2 bg-[#8F6182] rounded-lg py-1 px-2">
              <IoFlash /> Improved Employee Engagement
            </li>
            <li className="flex items-center gap-2 bg-[#8F6182] rounded-lg py-1 px-2">
              <IoFlash /> Stronger Organisational Culture
            </li>
            <li className="flex items-center gap-2 bg-[#8F6182] rounded-lg py-1 px-2">
              <IoFlash /> Sustainable Growth
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
