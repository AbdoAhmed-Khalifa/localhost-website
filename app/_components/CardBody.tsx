import { Star, TrendingDown } from 'lucide-react';
type props = {
  name: string;
  city: string;
  country: string;
  price: number;
  rate: number;
};
const CardBody = ({ name, city, country, price, rate }: props) => {
  return (
    <div className="p-4 space-y-2 mb-3">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">
            {city}, {country}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-sm font-medium">{rate}</p>
          <Star size={16} color="#eab308" fill="#eab308" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <p className="text-xl font-bold">${price}</p>
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
    </div>
  );
};
export default CardBody;
