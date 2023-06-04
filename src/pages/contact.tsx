import Link from "next/link";
import { Arrow, EmailInput, PageTitle, Subtitle } from "@/components";

export default function Contact() {
  return (
    <div className="px-[8%] py-10 bg-black">
      <div className="flex justify-between items-center gap-10 mb-10 md:mb-32">
        <Link href="/">
          <Arrow color="white" direction="left" />
        </Link>
        <PageTitle>Contact</PageTitle>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Subtitle>Have a chat with us.</Subtitle>
        <p className="font-bold text-2xl text-[#C4C4C4]">
          Enter your email below and we’ll get in contact
        </p>
      </div>

      <EmailInput />
    </div>
  );
}
