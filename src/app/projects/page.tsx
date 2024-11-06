import React from 'react'

function Projects() {
  return (

    <div>
      <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4">
         Projects
      </h1>
    </div>
    <div className="flex flex-wrap m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt=""
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="data:image/png;base64,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"
          />
          <div className="w-full">
            <h2 className="title-font text-2xl font-bold">
              Calculator
            </h2>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2My-1vysDyDGG8UZVhh44SgCCKOi5hqzuQ&s"
          />
          <div className="w-full">
            
            <h3 className="mb-3 text-2xl font-bold">ATM Machine</h3>
            <span className="inline-flex">
              
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://images.squarespace-cdn.com/content/v1/5dc5935a7224ad2839d7e750/7772fc97-b5c2-4e54-9b8c-b39a177e7e6b/bigtimer.net-fountaininstitute.jpg"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl ">
              Countdown Timer
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt=""
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_OrO_pJKmXEFKNtxbYaY2rWgsJ60InoAPw&s"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Portfolio Website
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVe4gMCR1w8HvOLU2ibivRuUnJ_qtQCem3g&s"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Todo List
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://i.ytimg.com/vi/Wbc2db82jLQ/maxresdefault.jpg"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              E-Commerce Website
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://content.instructables.com/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Number Guessing Game
            </h2>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://play-lh.googleusercontent.com/TuVhvDxhIz4sKtfAfUv5mh2RuTkd1Xa8hEQXlFGS95QNs9dVHt1_bFG6HP4qOCZY5W8"
          />
          <div className="w-full">
            <h2 className="title-font font-bold text-2xl">
              Currency Converter
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

export default Projects