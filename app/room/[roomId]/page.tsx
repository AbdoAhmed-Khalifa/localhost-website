import Amenities from '@/app/_components/Amenities';
import Description from '@/app/_components/Description';
import DetailsCard from '@/app/_components/DetailsCard';
import Reviews from '@/app/_components/Reviews';
import Similar from '@/app/_components/Similar';
import { getPlace, getPlaceFirebase } from '@/app/_lib/actions';
const page = async ({ params }: { params: Promise<{ roomId: string }> }) => {
  const roomId = (await params).roomId;
  const place = await getPlaceFirebase(roomId);

  return (
    <div className="md:mx-10 lg:mx-20 my-10">
      <DetailsCard place={place} />
      <Description />
      <div className="w-full h-[0.5px] my-9 bg-gray-200"></div>
      <Amenities />
      <Reviews />
      <Similar />
    </div>
  );
};

export default page;
