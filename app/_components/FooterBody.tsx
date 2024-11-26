import { footerLinks } from '@/constant';
const FooterBody = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 px-4 py-10 sm:px-6 lg:px-8 text-center md:text-start ">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
        {footerLinks.map(({ title, links }) => (
          <div key={title}>
            <p className="font-semibold text-lg ">{title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map(link => (
                <li
                  key={link}
                  className="transition hover:opacity-75 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterBody;
