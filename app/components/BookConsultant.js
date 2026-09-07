import LinkButton from "./LinkButton";

export default function BookConsultant() {
  return (
    <div className="p-6 md:p-10 w-full">
      <div className="bg-[#571244] px-6 py-7.5 rounded-lg text-center max-w-250 mx-auto">
        <p className="text-white hidden md:block">
          Want to accelerate professional growth and development at your
          organisation? <br />
          See how we can help.
        </p>
        <p className="text-white md:hidden">
          Don&apos;t just dream it — let&apos;s build it! Click now and start
          your project with Tobams Group. Your journey to digital excellence
          begins here.
        </p>

        <div className="mt-7.5">
          <LinkButton href="#" bg="#FFFFFF" text="#571244">
            Book a Consultation
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
