"use client";
import Image from "next/image";
import Footer from "./footer/page";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div className="md:pl-8">
    <section className=" body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
        Hello I'm Abdul Rahman
        <br className="hidden lg:inline-block"/>
        <Typewriter
  options={{
    strings: ['Frontend Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-xl">
      I’m a Frontend Developer with a strong foundation in javascript, tailwind css, typescript, nextjs, and nodejs. I’m
passionate about using these skills to develop innovative web applications that are user-friendly. I’m
always eager to learn more about web development and marketing. <br /> I enjoy the challenge of coding and
solving real-world problems. Currently, I’m looking for opportunities to join a team that values innovation
and shares my enthusiasm for technology.
      </p>
      <div className="flex justify-center">
       <Link href="/contact"><button className="inline-flex bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg font-semibold">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image 
        className="object-cover object-center rounded h-96 w-80"
        alt="hero"
        src={require('../../public/hero.jpg')}
      />
    </div>
  </div>
</section>
<About/>
<Skills/>
<Projects/>
<Contact/>
    </div>
  );
}
