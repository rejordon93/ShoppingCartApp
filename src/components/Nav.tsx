import React from "react";
import { Button, Menu } from "semantic-ui-react";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <Button onClick={() => setViewCart(false)} primary>
      Products
    </Button>
  ) : (
    <Button onClick={() => setViewCart(true)} secondary>
      View Cart
    </Button>
  );

  return (
    <Menu fixed="top" inverted>
      <Menu.Item header>Acme Co.</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>{button}</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
