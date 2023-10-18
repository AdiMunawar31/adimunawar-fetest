const Parallax = () => {
  return (
    <section
      className='flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center'
      style={{
        backgroundImage:
          "url(https://www.dumetschool.com/images/fck/membuat-gradiasi-cnavas-html5-30-03-2015-3.PNG)",
      }}
    >
      <h1 className='text-white text-5xl font-semibold mt-24 mb-10'>
        Stay Up-To-Date
      </h1>
      <span className='text-center font-bold mt-10 mb-28 text-white/90 w-6/12'>
        "Empowering you with real-time insights, our app is designed to keep
        your contact information up-to-date. Our automated scans tirelessly work
        behind the scenes, ensuring that you're always equipped with the latest
        and most accurate details. Say goodbye to the frustration of outdated
        contacts and hello to a world where staying informed is effortless. With
        us, you'll never miss a beat, and you'll always be in control of the
        most current information. Welcome to a future of seamless,
        always-accurate connections."
      </span>
    </section>
  );
};

export default Parallax;
