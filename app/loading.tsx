import Spinner from './_components/Spinner';

function loading() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Spinner />
    </div>
  );
}

export default loading;
