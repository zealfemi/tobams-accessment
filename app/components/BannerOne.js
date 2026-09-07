import Image from "next/image";
import LinkButton from "./LinkButton";

export default function BannerOne() {
  return (
    <div className="bg-[#57124410] grid md:grid-cols-2 gap-6 lg:gap-20 p-6 md:py-16 lg:px-16">
      <h2 className="md:hidden text-[#571244]">Learning Management System</h2>

      <Image
        src="/images/image-2.png"
        alt="Learning Management System"
        width={500}
        height={500}
        className="w-full aspect-square object-cover rounded-full"
      />

      <div className="flex flex-col gap-6">
        <h2 className="hidden md:block text-[#571244]">
          Learning Management System
        </h2>
        <div className="bg-[#57124410] flex flex-col gap-6 p-6">
          <p>
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today&apos;s competitive tech
            landscape.
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-[#571244] font-bold">
              Some of our courses include:
            </p>
            <ul className="flex flex-col md:flex-row flex-wrap gap-3 list-disc list-inside">
              <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>
          <div className="md:hidden">
            <LinkButton href="#" icon>
              Learn More
            </LinkButton>
          </div>
        </div>
        <div className="hidden md:block">
          <LinkButton href="#" icon>
            Learn More
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
