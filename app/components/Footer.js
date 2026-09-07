import Image from "next/image";
import LinkButton from "./LinkButton";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      {/* GET IN TOUCH */}
      <div className="p-6 lg:py-10 lg:px-16 bg-[#1D0617] flex flex-col md:flex-row text-white gap-6 md:gap-2 md:items-center justify-between">
        <div>
          <p className="mb-2">Ready to be a part of something extraordinary?</p>
          <h2>Let’s work together to create a difference</h2>
        </div>

        <div>
          <LinkButton href="#">Get In Touch</LinkButton>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-[#11040E] text-white px-6 py-5 lg:py-1 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 lg:gap-16 my-6 lg:my-12">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo-footer.png"
              alt="logo footer"
              width={500}
              height={64}
              className="w-31 md:w-41"
            />

            <p>
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            <ul className="flex gap-5">
              <li className="grid place-items-center rounded-full p-2 bg-white">
                <FaLinkedinIn className="text-black" />
              </li>
              <li className="grid place-items-center rounded-full p-2 bg-white">
                <RiInstagramFill className="text-black" />
              </li>
              <li className="grid place-items-center rounded-full p-2 bg-white">
                <FaXTwitter className="text-black" />
              </li>
            </ul>
          </div>

          <div>
            <h3>What We Do</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>Sustainability Services</li>
              <li>Strategy Planning and Implementation</li>
              <li>Tech Talent Solutions</li>
              <li>Training and Development</li>
              <li>IT Consulting Services</li>
              <li>Social Impact</li>
              <li>Talent Recruitment</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>About</li>
              <li>Jobs</li>
              <li>Projects</li>
              <li>Our Founder</li>
              <li>Business Model</li>
              <li>The Team</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h3>Solution</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>Tobams Group Academy</li>
              <li>Help a Tech Talent</li>
              <li>Campus Ambassadors Program</li>
              <li>Join Our Platform</li>
              <li>Pricing</li>
              <li>Book a Consultation</li>
              <li>Join Our Slack Community</li>
            </ul>
          </div>
        </div>

        <hr className="lg:hidden border-[#DDD0DA]" />

        <div className="bg-[#FFFFFF10] p-4 lg:py-6 lg:px-0 my-6 lg:my-12 rounded-lg flex flex-col lg:flex-row gap-6 justify-between">
          <div className="lg:px-6 order-2 lg:order-0">
            <h3 className="mb-2.5">Registered Offices</h3>
            <div className="flex flex-col lg:flex-row gap-6">
              <div>
                <p className="text-[#EF4353]">United Kingdom</p>
                <p>07451196 (Registered by Company House)</p>
                <p>Vine Cottages, 215 North Street, Romford, Essex, United</p>
                <p> Kingdom, RM1 4QA</p>
              </div>

              <div className="lg:border-l lg:border-l-[#DDD0DA] lg:px-6">
                <p className="text-[#EF4353]">Nigeria</p>
                <p>
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                </p>
                <p>4, Muaz Close, Angwar-Rimi</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-0 lg:border-l lg:border-l-[#DDD0DA] lg:px-6">
            <h3 className="mb-2.5">Contact Information</h3>
            <ul>
              <li className="flex items-center gap-4">
                <MdEmail className="text-[#EF4353]" /> theteam@tobamsgroup.com
              </li>
              <li className="mt-3 flex items-center gap-4">
                <MdPhone className="text-[#EF4353]" /> +447886600748
              </li>
            </ul>
          </div>
        </div>

        <hr className="lg:hidden border-[#DDD0DA]" />

        <div className="my-6 lg:my-12 flex flex-col lg:flex-row justify-between gap-6 text-sm font-light">
          <p className="order-2 lg:order-1 text-center">
            Copyright &copy; Tobams Group, 2026. All rights reserved.
          </p>
          <div className="order-1 lg:order-2">
            <ul className="flex flex-wrap gap-6 justify-center underline">
              <li className="lg:order-2">Privacy Policy</li>
              <li className="lg:order-3">Cookies Policy</li>
              <li className="lg:order-1">Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
