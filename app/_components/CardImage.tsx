import Image from 'next/image';
import React from 'react';
import { Heart } from 'lucide-react';

const CardImage = ({ cover, id }: { cover: string; id: string }) => {
  return (
    <div className="relative">
      <Image
        src={
          parseInt(id) < 16 ? `/images/${cover}.jpeg` : '/images/cover 1.jpeg'
        }
        width={300}
        height={300}
        alt={cover}
        className="w-full h-80 object-cover"
      />
      <div className="cursor-pointer absolute top-3 right-3 bg-white p-1.5  rounded-full shadow-sm">
        <Heart size={17} />
      </div>
    </div>
  );
};
export default CardImage;
