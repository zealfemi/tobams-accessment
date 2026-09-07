import Image from "next/image";
import { IoFlash } from "react-icons/io5";

export default function Banner({ children, heading }) {
  return (
    <div>
      <div className="grid gap-6 lg:gap-16 md:grid-cols-2">
        <h2 className="md:hidden">{heading}</h2>
        {children}
      </div>
    </div>
  );
}

function BannerImage({ image, alt, children }) {
  return (
    <>
      <Image
        src={image}
        alt={alt}
        loading="eager"
        width={700}
        height={700}
        className="object-cover rounded-tl-[56px] rounded-tr-3xl rounded-br-3xl rounded-bl-xl md:h-full"
      />
      {children ? children : ""}
    </>
  );
}
function BannerContent({ heading, description, list, children }) {
  return (
    <div className="order-2 md:order-0 flex flex-col gap-5">
      <h2 className="hidden md:block">{heading}</h2>
      <p>{description}</p>
      <ul className="flex flex-col gap-2">
        {list?.map((item) => (
          <li key={item} className="flex gap-2 items-center">
            <IoFlash className="text-[#571244]" /> {item}
          </li>
        ))}
      </ul>
      {children ? children : ""}
    </div>
  );
}

Banner.Image = BannerImage;
Banner.Content = BannerContent;

// border-radius: 56px 24px 23px 12px;
