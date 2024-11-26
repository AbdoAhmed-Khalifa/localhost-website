import CardImage from './CardImage';
import CardBody from './CardBody';
import { Place } from '@/types/place';
import Link from 'next/link';
const Card = ({ place }: { place: Place }) => {
  return (
    <Link
      href={`/room/${place.id}`}
      className="w-full border rounded-lg overflow-hidden shadow-lg bg-[#fafafa] "
    >
      <CardImage cover={place.cover} id={place.id} />
      <CardBody
        name={place.name}
        city={place.city}
        country={place.country}
        price={place.price}
        rate={place.rate}
      />
    </Link>
  );
};

export default Card;
