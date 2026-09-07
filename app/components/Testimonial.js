import React from "react";
import Slider from "./Slider";

const testimonials = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/testimonials/t-1.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/testimonials/t-2.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/testimonials/t-3.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    id: 4,
    name: "Rita Ahmed",
    role: "Creative Director, ArtInnovate Studios",
    image: "/images/testimonials/t-4.png",
    text: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
  },
];

export default function Testimonial() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[#C4C4C430]">
      <h2 className="text-center mb-10">Testimonials</h2>
      <Slider data={testimonials} />
    </section>
  );
}
