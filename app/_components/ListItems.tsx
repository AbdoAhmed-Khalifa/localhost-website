import Item from './Item';

const ListItems = ({ direction }: { direction: 'flex-row' | 'flex-col' }) => {
  return (
    <ul className={` flex ${direction}  gap-6 list-none text-gray-800`}>
      <Item link="Home" />
      <Item link="Stays" />
      <Item link="Become a host" />
    </ul>
  );
};
export default ListItems;
