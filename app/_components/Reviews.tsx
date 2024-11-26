import { Button } from '@/components/ui/button';
import { reviews } from '@/constant';
import ReviewCard from './ReviewCard';

const Reviews = () => {
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
        {reviews.map(review => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
