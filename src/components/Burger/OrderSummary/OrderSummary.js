import React from "react";
import AuxChildren from "../../../hoc/AuxChildren";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <AuxChildren>
      <h3> Your Order</h3>
      <p>Following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue Checkou?</p>
      <Button btnType="Danger" clicked={props.purchasableCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchasableContinued}>
        Continue
      </Button>
    </AuxChildren>
  );
};

export default OrderSummary;
