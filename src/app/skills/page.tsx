"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
function Skills() {
  return (
    <div>
      <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-medium title-font mb-4">
         Skills
      </h1>
    </div>

    <div className="flex flex-wrap m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
 
          <motion.img
            
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
         
            alt=""
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg"

          />
    
          <div className="w-full">
            <h2 className="title-font text-2xl font-bold">
              HTML
            </h2>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.3,
             ease: [0, 0.71, 0.2, 1.01],
             scale: {
               type: "spring",
               damping: 5,
               stiffness: 100,
               restDelta: 0.001
             }
           }}

            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&s"
          />
          <div className="w-full">
            
            <h3 className="mb-3 text-2xl font-bold">CSS</h3>
            <span className="inline-flex">
              
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.3,
             ease: [0, 0.71, 0.2, 1.01],
             scale: {
               type: "spring",
               damping: 5,
               stiffness: 100,
               restDelta: 0.001
             }
           }}
          
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl ">
              Javascript
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img

initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.3,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001
  }
}}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://www.datocms-assets.com/48401/1628645197-learn-typescript.png"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Typescript
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img

initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.3,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001
  }
}}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Reactjs
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Nextjs
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Tailwind Css
            </h2>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw_2cNT1EMdE5IZudq2wji72uEPhih5KV4g&s"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Nodejs
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://images.ctfassets.net/wp1lcwdav1p1/31dUrsGyucK0UNmJEQUqj3/3c57d917e84f6500ee2ec54e8760b854/UX_vs_UI.png?w=1500&q=60"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
             UI/UX Design
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://miro.medium.com/v2/resize:fit:1220/0*epnKnkKuLx2RAajt"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
             Postgre Sql
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://media.licdn.com/dms/image/D4D12AQFKtXLLsNLDyw/article-cover_image-shrink_720_1280/0/1708969830468?e=2147483647&v=beta&t=C6qLT3pg4HcmNZEjx-Bd1CtvOmRumkLoM3JLOxeoAjA"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
             Sanity
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://github.blog/wp-content/uploads/2024/07/github-logo.png"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
             Github
            </h2>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>

    </div>
  )
}

export default Skills