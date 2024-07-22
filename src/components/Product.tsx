import React, { ReactElement } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { ProductType } from "../context/ProductsProvider";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

export const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  console.log(img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "Item in Cart" : null;

  return (
    <Card>
      <Image src={img} alt={product.name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          <span className="price">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </span>
        </Card.Meta>
        <Card.Description>{itemInCart}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button primary onClick={onAddToCart} disabled={inCart}>
          <Icon name="cart plus" />
          {inCart ? "In Cart" : "Add to Cart"}
        </Button>
      </Card.Content>
    </Card>
  );
};
