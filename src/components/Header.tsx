import { Nav } from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  const context = (
    <header>
      <div>
        <h1>Acme Co.</h1>
        <div>
          <p>Total Items:</p>
          <p>Total Prices:</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return context;
};
