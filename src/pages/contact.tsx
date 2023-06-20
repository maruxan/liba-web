import Link from "next/link";
import Image from "next/image";
import {
  Arrow,
  EmailInput,
  PageTitle,
  SocialLinks,
  Subtitle,
} from "@/components";
import mapImage from "public/map.png";

export default function Contact() {
  return (
    <div className="px-[8%] py-10 bg-black">
      <div className="flex justify-between items-center gap-10 mb-10 md:mb-32">
        <Link href="/">
          <Arrow color="white" direction="left" />
        </Link>
        <PageTitle>
          <span className="text-white">Contact</span>
        </PageTitle>
      </div>

      <div className="flex flex-col items-center gap-2 mb-14">
        <Subtitle>
          <span className="text-white">Have a chat with us.</span>
        </Subtitle>
        <p className="font-bold text-2xl text-[#C4C4C4]">
          Enter your email below and we’ll get in contact
        </p>
      </div>

      <div className="flex justify-center mb-20">
        <EmailInput />
      </div>

      <div className="flex gap-10 flex-col items-center">
        <Subtitle>
          <span className="text-white">Or you can reach out in person.</span>
        </Subtitle>
        <div className="flex items-center justify-between gap-32">
          <ul className="font-bold text-white space-y-3 text-2xl">
            <li>estudioliba</li>
            <li>8575 Nowlin Rd, AL</li>
            <li>(262) 555-0131</li>
            <li>
              <SocialLinks color="white" size="lg" direction="row" />
            </li>
          </ul>
          <div>
            <Image
              src={mapImage}
              placeholder="blur"
              alt="studio location on map"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
