import { log } from "next/dist/server/typescript/utils";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function LinkButton({ children, href, icon, bg, text }) {
  const styles = {
    backgroundColor: bg ? bg : "#571244",
    color: text ? text : "#FFFFFF",
  };

  return (
    <Link
      href={href}
      className={`rounded-sm px-5 py-3 inline-flex gap-1 items-center`}
      style={styles}>
      <span className="text-[14px]">{children}</span>{" "}
      {icon && <HiMiniArrowUpRight className="text-[18px]" />}
    </Link>
  );
}
