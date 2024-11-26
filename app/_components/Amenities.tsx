import { Button } from '@/components/ui/button';
import { amenities } from '@/constant';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const Amenities = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-start">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-semibold  mb-4">Amenities</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
          {amenities.map(({ text, icon }) => (
            <div key={text} className="flex items-center gap-2">
              <Image src={icon} alt="icon" width={20} height={20} />
              <span> {text}</span>
            </div>
          ))}
        </div>
        <Button className="mt-8 px-6 py-5 font-medium bg-transparent border border-primary text-primary hover:bg-primary hover:text-white">
          Show all amenities
        </Button>
      </div>
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-2xl font-semibold ">Where you&apos;ll be</h2>
            <div className="flex items-center gap-1 ">
              <MapPin size={12} color="black" />
              The Bridle Path
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <Image
              src="/images/Cloud.svg"
              alt="map"
              width={40}
              height={40}
              className="rounded"
            />
            <div className=" flex flex-col text-sm">
              <span className="font-semibold">20°C</span>{' '}
              <span className=" text-gray-500">Broken clouds</span>
            </div>
          </div>
        </div>
        <Image
          src="/images/map.png"
          alt="map"
          width={500}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Amenities;
