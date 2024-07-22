import React from "react";
import { useCart } from "../hooks/useCart";
import { Container, Segment, List, Header } from "semantic-ui-react";

type PropsType = {
  viewCart: boolean;
};

export const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <List>
      <List.Item>
        <List.Header>Total Items</List.Header>
        {totalItems}
      </List.Item>
      <List.Item>
        <List.Header>Total Price</List.Header>
        {totalPrice}
      </List.Item>
      <List.Item>
        <List.Header>Shopping Cart</List.Header>
        {year}
      </List.Item>
    </List>
  );

  return (
    <Segment inverted vertical className="footer">
      <Container textAlign="center">
        <Header as="h4" inverted>
          Footer
        </Header>
        {pageContent}
      </Container>
    </Segment>
  );
};
