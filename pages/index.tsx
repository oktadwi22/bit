import { Inter,Sora } from "next/font/google";
import Hero from "@/modules/Hero/Hero";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={` ${sora.className} flex justify-center items-center overflow-hidden`}>
      <Head>
        <title>BitEstate</title>
      </Head>
      <Hero />
    </div>
  );
}
