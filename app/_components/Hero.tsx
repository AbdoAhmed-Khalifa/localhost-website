import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <section className="relative bg-[url(/header.png)] bg-cover bg-center bg-no-repeat h-[450px] sm:h-80 md:h-96 lg:h-72 w-full">
      <div className="mx-5 sm:mx-10 lg:mx-20">
        <div className="pt-10 pb-5 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            Find a <span className="text-primary">host</span> for every journey
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Discover the best local rental properties that fits your every
            travel needs
          </p>
        </div>
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
