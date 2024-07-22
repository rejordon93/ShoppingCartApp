type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>Products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>viewCart</button>
  );
  const content = <nav>{button}</nav>;

  return content;
};
