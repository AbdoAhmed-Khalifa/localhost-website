const FooterBottom = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="mx-5 md:mx-10 lg:mx-20 px-4 py-4 sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:justify-between">
          <p className="text-xs ">
            &copy; 2022. Company Name. All rights reserved.
          </p>

          <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
            <li className="transition hover:opacity-75 cursor-pointer">
              Privacy Policy
            </li>
            <li className="transition hover:opacity-75 cursor-pointer">
              Terms & Conditions
            </li>

            <li className="transition hover:opacity-75 cursor-pointer">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
