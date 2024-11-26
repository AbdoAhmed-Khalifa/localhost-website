import Image from 'next/image';

const User = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/notifications.svg"
        alt="notification"
        width={25}
        height={25}
        className="cursor-pointer"
      />
      <Image
        src="/avatar.jpeg"
        alt="avatar"
        width={35}
        height={35}
        className="rounded-full cursor-pointer w-8 h-8"
      />
    </div>
  );
};
export default User;
