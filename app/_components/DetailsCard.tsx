import { Button } from '@/components/ui/button';
import { Heart, Star, TrendingDown } from 'lucide-react';
import Image from 'next/image';
import { Place } from '@/types/place';

const DetailsCard = ({ place }: { place: Place }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="relative ">
        <Image
          src={
            parseInt(place.id) < 16
              ? `/images/${place.cover}.jpeg`
              : '/images/cover 1.jpeg'
          }
          alt="Briarwoods Cabin"
          className="rounded-xl h-[460px] object-cover"
          width={800}
          height={600}
        />
        <div className="mt-4 grid grid-cols-4 gap-4">
          <Image
            src={'/images/cover 1.jpeg'}
            alt="Briarwoods Cabin"
            width={200}
            height={200}
            className="rounded-lg h-20 object-cover"
          />
          <Image
            src={'/images/cover 4.jpeg'}
            alt="Briarwoods Cabin"
            width={200}
            height={200}
            className="rounded-lg h-20 object-cover"
          />
          <Image
            src={'/images/cover 9.jpeg'}
            alt="Briarwoods Cabin"
            width={200}
            height={200}
            className="rounded-lg h-20 object-cover"
          />
          <Image
            src={'/images/cover 10.jpeg'}
            alt="Briarwoods Cabin"
            width={200}
            height={200}
            className="rounded-lg h-20 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col bg-white shadow-md px-8 py-10 rounded-lg xl:space-y-7 space-y-4  ">
        <div className="relative">
          <div className="cursor-pointer absolute top-3 right-3 bg-white shadow-sm border border-black p-1.5 rounded-full ">
            <Heart size={17} color="black" />
          </div>
          <h1 className="text-3xl font-semibold ">{place.name}</h1>
          <p className="opacity-90 my-1">
            {place.city},{place.country}
          </p>
          <div className="flex items-center space-x-2 my-1">
            <p className="text-sm font-medium">{place.rate}</p>
            <Star size={16} color="#eab308" fill="#eab308" />
            <div className="w-[0.5px] h-4  bg-gray-400"></div>
            <span className="text-primary underline">200 Reviews</span>
          </div>
        </div>
        <p className=" my-4">
          Welcome to our cozy cabin retreat nestled in the heart of Bridlepath,
          Ontario! Surrounded by lush landscapes and tranquil trails, this
          charming getaway offers the perfect blend of rustic elegance and
          modern comfort.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <p className="text-xl font-bold">${place.price}</p>
            <p className="text-sm text-gray-400">/night</p>
          </div>
          <div className="pt-2">
            <div className="text-emerald-500 text-sm font-semibold flex items-center space-x-1 hover:underline cursor-pointer">
              <span className="border-2 border-emerald-500 p-0.5 rounded-md">
                <TrendingDown size={10} strokeWidth={3} />
              </span>
              <span>Price chart</span>
            </div>
          </div>
        </div>
        <Button className="bg-primary text-white py-7 px-6 text-lg rounded-lg hover:bg-opacity-90 ">
          Book this home
        </Button>

        <div>
          <p className=" text-gray-400 mb-3">Hosted by:</p>
          <div className="flex items-center justify-between border-t border-gray-300 pt-2">
            <div className="flex items-center">
              <Image
                src="/avatar2.png"
                alt="Host Avatar"
                width={50}
                height={50}
                className="rounded-full cursor-pointer w-14 h-14"
              />
              <div className="ml-3">
                <p className=" font-medium">Michelle Ward</p>
                <p className="text-gray-500 text-sm">Joined in May 2021</p>
              </div>
            </div>
            <p className="flex items-center bg-primary rounded-3xl bg-opacity-15 py-1 px-3">
              <Image src="/Vector.svg" alt="Verified" width={10} height={10} />
              <span className="ml-2 text-primary font-medium text-sm">
                Super host
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
