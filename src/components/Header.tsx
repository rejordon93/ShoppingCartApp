import React from "react";
import { Nav } from "./Nav";
import { useCart } from "../hooks/useCart";
import {
  Container,
  Segment,
  Header as SemanticHeader,
  Statistic,
} from "semantic-ui-react";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  return (
    <Segment inverted vertical>
      <Container>
        <SemanticHeader as="h1" inverted>
          Acme Co.
        </SemanticHeader>
        <Statistic.Group inverted>
          <Statistic>
            <Statistic.Value>{totalItems}</Statistic.Value>
            <Statistic.Label>Total Items</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{totalPrice}</Statistic.Value>
            <Statistic.Label>Total Price</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </Container>
    </Segment>
  );
};
