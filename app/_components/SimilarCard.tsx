import { Heart, Star, UserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  subTitle: string;
  img: string;
  rating: number;
  guests: string;
  price: number;
};

const SimilarCard = ({
  title,
  img,
  rating,
  guests,
  subTitle,
  price,
}: Props) => {
  return (
    <div className="flex items-center gap-1  w-full border rounded-lg overflow-hidden shadow-md bg-[#fafafa]">
      <div className="relative w-5/12">
        <Image
          src={`/images/${img}`}
          width={400}
          height={400}
          alt="cabin"
          className="w-full h-44 object-cover"
        />
        <div className="cursor-pointer absolute top-3 right-3 bg-white p-1  rounded-full shadow-sm">
          <Heart size={15} />
        </div>
      </div>
      <div className="p-4 md:p-0 lg:p-4 space-y-2  mb-0">
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{subTitle}</p>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-sm font-medium">{rating}</p>
            <Star size={16} color="#eab308" fill="#eab308" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <p className="text-lg text-primary font-semibold">${price}</p>
            <p className="text-sm text-gray-400">/night</p>
            <div className="w-[0.5px] h-3 mx-5  bg-gray-400"></div>
            <p className="text-sm text-gray-400 flex items-center space-x-1">
              <UserRound size={16} />
              <span>{guests} guests</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarCard;
