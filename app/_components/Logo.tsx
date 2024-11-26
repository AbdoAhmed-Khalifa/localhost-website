import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="logo"
        width={100}
        height={27}
        className="max-w-[100px] mx-h-[27px]"
      />
    </Link>
  );
};
export default Logo;
