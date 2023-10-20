const ShopBanner = () => {
  return (
    <section className=" rounded bg-cover bg-center bg-fixed bg-gradient-to-r from-[#F7C54C] to-[#e7ba4f] p-8 md:p-16 text-white mb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {`Don't Miss Out: Get Your Smartwatch at Unbeatable Prices!`}
          </h1>
          <p className="mb-4">
            {`Don't break the bank to upgrade your wrist game! Explore our smartwatch collection at unbeatable prices, available for a limited time only.`}
          </p>
          <button className="hover:bg-white hover:text-[#F7C54C] py-2 px-4 rounded font-medium bg-black text-white transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/xX0fRq0/cd48c920eaceadcc92aed1d555d62334-removebg-preview.png"
            alt="Smartwatch"
            className="max-w-full h-[15rem] md:h-[25rem] mt-12 md:mt-0 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
