import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, House, Search, UserRound } from 'lucide-react';

const SearchForm = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4 bg-[#fafafa] p-4  rounded-xl">
      <div className="w-full sm:w-5/12 lg:w-4/12 relative">
        <Input
          placeholder="Accommodation"
          className="py-4 md:py-7 placeholder:text-black"
        />
        <House
          size={20}
          color="rgba(0,0,0,0.5)"
          className="absolute top-3 md:top-5 right-4"
        />
      </div>
      <div className="w-full sm:w-3/12 lg:w-2/12 relative">
        <Input
          placeholder="Check-in"
          className="py-4 md:py-7 placeholder:text-black"
        />
        <Calendar
          size={20}
          color="rgba(0,0,0,0.5)"
          className="absolute top-3 md:top-5 right-4"
        />
      </div>
      <div className="w-full sm:w-3/12 lg:w-2/12 relative">
        <Input
          placeholder="Check-out"
          className="py-4 md:py-7 placeholder:text-black"
        />
        <Calendar
          size={20}
          color="rgba(0,0,0,0.5)"
          className="absolute top-3 md:top-5 right-4"
        />
      </div>
      <div className="w-full sm:w-3/12 lg:w-2/12 relative">
        <Input
          placeholder="Guests"
          className="py-4 md:py-7 placeholder:text-black"
        />
        <UserRound
          size={20}
          color="rgba(0,0,0,0.5)"
          className="absolute top-3 md:top-5 right-4"
        />
      </div>
      <div className="w-full sm:w-3/12 lg:w-1/12">
        <Button
          className="w-full py-4 md:py-7 bg-primary text-white text-sm md:text-base flex justify-center items-center"
          variant="default"
        >
          <Search strokeWidth={3} size={24} className="md:mr-2" />
          <span className="hidden md:inline">Search</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
