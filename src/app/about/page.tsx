import Image from 'next/image'
import React from 'react'
function About() {
  return (
    <div>
      <section className=" body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-72 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={require('../../components/components/about.jpeg')}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed text-lg">
I am expert in Html,Tailwind Css, Javascript, Typescript, Nextjs, Sanity and also Postgre Sql i have made many websites. <br />

Enthusiastic learner at PIAIC diving deep into the realms of certified cloud applied Generative AI. <br />

 Fueled by a passion for cutting-edge technologies, I'm on a mission to leverage these skills for impactful freelancing venture. <br />

With a commitment to continuous growth, I'm excited about contributing to innovative projects and connecting with like-minded professionals.
I am very passionate and hard working person . <br /><br />
  Contact: Please email me at <span className='text-sky-400 hover:text-sky-900 underline'> rahmansiddiqui331@gmail.com</span> to reach out to me.

      </p>
      <div className="flex justify-center">
      
      <a href='./cv.pdf' target='_blank'>
        <button className="ml-4 inline-flex bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg font-semibold">
          View CV
        </button></a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About