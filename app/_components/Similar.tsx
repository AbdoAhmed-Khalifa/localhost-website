import { Button } from '@/components/ui/button';
import SimilarCard from './SimilarCard';

const Similar = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-10 mb-4  ">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <Button
          variant="link"
          className="text-primary font-medium hover:underline p-0 m-0 text-base"
        >
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <SimilarCard
          title="Missisuaga Aistream"
          subTitle="Missisauga, Ontario, Canada"
          guests="2"
          rating={4.8}
          price={502}
          img="cover 13.jpeg"
        />
        <SimilarCard
          title="Urban Loft"
          subTitle="Urban Loft"
          guests="2"
          rating={4.8}
          price={502}
          img="cover 11.jpeg"
        />
        <SimilarCard
          title="Forestville Cottages"
          subTitle="Simcoe, Ontario Canada"
          guests="2"
          rating={4.8}
          price={502}
          img="cover 16.jpeg"
        />
      </div>
    </>
  );
};

export default Similar;
