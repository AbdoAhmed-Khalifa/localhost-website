import { Button } from '@/components/ui/button';
import { AppWindow, CalendarX2, UserRoundCheck } from 'lucide-react';

const Description = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-start gap-5 mt-5">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold  mb-4">About this home</h2>
        <p className=" mb-4">
          Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
          heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
          tranquility of nature&apos;s embrace, is designed to provide the
          ultimate relaxing getaway.
        </p>
        <p className=" mb-4">
          <span className="font-bold">Living Space:</span> This charming cabin
          boasts a spacious living area adorned with rustic decor and modern
          amenities. Enjoy the warmth of the wood-burning fireplace, relax on
          the plush sofas, and make yourself at home with our entertainment
          center featuring a flat-screen TV, WiFi, and more.
        </p>
        <p className=" mb-4">
          <span className="font-bold">Bedrooms:</span> With 3 beautifully
          appointed bedrooms, our cabin comfortably accommodates up to [number
          of guests]. Each room is furnished with luxurious bedding and unique
          woodland-inspired touches to ensure a restful slumber.
        </p>
        <Button
          variant="link"
          className="text-primary font-medium hover:underline p-0 m-0 text-base"
        >
          Show more
        </Button>
      </div>
      <div className="lg:w-1/3 mt-8 lg:mt-14">
        <ul className="space-y-6 ">
          <li className="flex items-center">
            <div className="flex-shrink-0 w-14 h-14 bg-green-100 text-primary flex items-center justify-center rounded-lg">
              <AppWindow size={30} />
            </div>
            <div className="ml-4">
              <p className=" font-medium">Dedicated workspace</p>
              <p className="text-gray-600 text-sm">
                A private room equipped with WiFi
              </p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex-shrink-0 w-14 h-14 bg-green-100 text-primary flex items-center justify-center rounded-lg">
              <UserRoundCheck size={30} />
            </div>
            <div className="ml-4">
              <p className=" font-medium">Self check-in</p>
              <p className="text-gray-600 text-sm">
                Check in with just your phone
              </p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex-shrink-0 w-14 h-14 bg-green-100 text-primary flex items-center justify-center rounded-lg">
              <CalendarX2 size={30} />
            </div>
            <div className="ml-4">
              <p className=" font-medium">Free cancellation</p>
              <p className="text-gray-600 text-sm">Cancel anytime</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Description;
