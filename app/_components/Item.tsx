type Props = {
  link: string;
};

const Item = ({ link }: Props) => {
  return <li className="hover:text-primary cursor-pointer ">{link}</li>;
};
export default Item;
