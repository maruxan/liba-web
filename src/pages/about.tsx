import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Arrow, PageTitle, Subtitle, TeamCard } from '@/components';
import brandsImg from 'public/brands.png';
import devImg from 'public/development-team-member.jpg';
import designerImg from 'public/design-team-member.jpg';
import photographerImg from 'public/photography-team-member.jpg';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Liba - About us</title>
      </Head>
      <div className="px-[8%] py-10 bg-white min-h-screen">
        <div className="flex justify-between items-center gap-10 mb-10 md:mb-14">
          <PageTitle>
            <span className="text-black">About Us</span>
          </PageTitle>
          <Link href="/">
            <motion.div whileHover={{ x: 10 }}>
              <Arrow color="black" direction="right" />
            </motion.div>
          </Link>
        </div>

        <Subtitle>
          <motion.span
            animate={{ opacity: [0, 1], transition: { delay: 0.3 } }}
            className="text-black">
            Semper ultrices dui quis faucibus egestas sociis. Sit sapien, nulla
            tellus elit leo ac tempus donec. Tristique diam iaculis duis mauris
            integer placerat aliquet vestibulum.
          </motion.span>
        </Subtitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10 mb-16 max-w-6xl mx-auto">
          <motion.div
            animate={{
              y: [100, 0],
              opacity: [0, 1],
              transition: { delay: 0.3 },
            }}>
            <TeamCard name="Greg Webb" role="design" imageSrc={designerImg} />
          </motion.div>
          <motion.div
            animate={{
              y: [100, 0],
              opacity: [0, 1],
              transition: { delay: 0.6 },
            }}>
            <TeamCard
              name="Philip Hawkins"
              role="development"
              imageSrc={devImg}
            />
          </motion.div>
          <motion.div
            animate={{
              y: [100, 0],
              opacity: [0, 1],
              transition: { delay: 0.9 },
            }}>
            <TeamCard
              name="Gloria Alexander"
              role="photography"
              imageSrc={photographerImg}
            />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1], transition: { delay: 1.2 } }}
          className="flex flex-col items-center gap-16 mt-32 mb-16">
          <Subtitle>
            <span className="text-black">Trusted by the best</span>
          </Subtitle>
          <Image src={brandsImg} alt="Team member photo" />
        </motion.div>
      </div>
    </>
  );
}
