import { Grid2x2, Map } from 'lucide-react';
import Card from './Card';
import { Button } from '@/components/ui/button';
import { getAllPlaces, getAllPlacesFirebase } from '../_lib/actions';

const CardList = async () => {
  const places = await getAllPlacesFirebase();
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 my-10 space-y-5 ">
      <div className="flex justify-between items-center ">
        <p className="text-lg">
          Stays nearby: <span className="font-bold">Toronto Ontario</span>
        </p>
        <p className="flex gap-2 bg-[#fafafa] shadow-md p-2 rounded-md items-center">
          <span className="bg-primary p-1 rounded-lg">
            <Grid2x2 size={20} color="white" strokeWidth={3} />
          </span>
          <span>
            <Map size={20} />
          </span>
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {places.map(place => (
          <Card key={place.id} place={place} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-5">
        <Button className=" border-2 border-primary px-10 py-6 bg-transparent  text-primary text-base hover:text-white">
          Show more
        </Button>
      </div>
    </div>
  );
};

export default CardList;
