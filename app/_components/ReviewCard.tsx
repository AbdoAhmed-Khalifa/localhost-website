import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  img: string;
  date: string;
  rating: string;
  description: string;
};

const ReviewCard = ({ name, img, date, rating, description }: Props) => {
  return (
    <div key={name} className="rounded-lg  p-6 sm:p-8 border">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            src={img}
            width={40}
            height={40}
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="mt-0.5 text-lg font-medium ">{name}</p>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-sm font-medium">{rating}</p>
          <Star size={16} color="#eab308" fill="#eab308" />
        </div>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ReviewCard;
