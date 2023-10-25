import React from "react";

const Parallax = () => {
  return (
    <section
      className='w-full h-[500px] bg-cover bg-fixed bg-center flex flex-col justify-center items-center'
      style={{
        backgroundImage:
          "url(https://colibriwp.com/blog/wp-content/uploads/2022/02/15.jpg)",
      }}
    >
      <div className='text-gray-900 text-3xl sm:text-4xl font-semibold text-center mt-40 sm:mt-24 mb-6'>
        Stay Up-To-Date
      </div>
      <div className='text-center font-bold sm:mt-10 mb-40 sm:mb-28 text-gray-900 max-w-2xl mx-auto p-4'>
        "Empowering you with real-time insights, our app is designed to keep
        your contact information up-to-date. Our automated scans tirelessly work
        behind the scenes, ensuring that you're always equipped with the latest
        and most accurate details. Say goodbye to the frustration of outdated
        contacts and hello to a world where staying informed is effortless. With
        us, you'll never miss a beat, and you'll always be in control of the
        most current information. Welcome to a future of seamless,
        always-accurate connections."
      </div>
    </section>
  );
};

export default Parallax;
