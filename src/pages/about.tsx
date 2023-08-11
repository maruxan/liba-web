import Link from "next/link";
import Image from "next/image";
import { Arrow, PageTitle, Subtitle, TeamCard } from "@/components";
import brandsImg from "public/brands.png";
import devImg from "public/development-team-member.jpg";
import designerImg from "public/design-team-member.jpg";
import photographerImg from "public/photography-team-member.jpg";

export default function About() {
  return (
    <div className="px-[8%] py-10 bg-white min-h-screen">
      <div className="flex justify-between items-center gap-10 mb-10 md:mb-14">
        <PageTitle>
          <span className="text-black">About Us</span>
        </PageTitle>
        <Link href="/">
          <Arrow color="black" direction="right" />
        </Link>
      </div>

      <Subtitle>
        <span className="text-black">
          Semper ultrices dui quis faucibus egestas sociis. Sit sapien, nulla
          tellus elit leo ac tempus donec. Tristique diam iaculis duis mauris
          integer placerat aliquet vestibulum.
        </span>
      </Subtitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10 mb-16 max-w-6xl mx-auto">
        <TeamCard name="Greg Webb" role="design" imageSrc={designerImg} />
        <TeamCard name="Philip Hawkins" role="development" imageSrc={devImg} />
        <TeamCard
          name="Gloria Alexander"
          role="photography"
          imageSrc={photographerImg}
        />
      </div>

      <div className="flex justify-center">
        <Subtitle>
          <span className="text-black">Trusted by the best</span>
        </Subtitle>
      </div>

      <div className="flex justify-center my-16">
        <Image src={brandsImg} alt="Team member photo" />
      </div>
    </div>
  );
}
