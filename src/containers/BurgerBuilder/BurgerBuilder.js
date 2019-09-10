import React, { Component } from "react";
import { connect } from "react-redux";

import AuxChildren from "../../hoc/AuxChildren";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import * as actionTypes from "../../store/actions/actionsType";

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchasableHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasableCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchasableContinueHandler = () => {
    alert("You continue!");
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <AuxChildren>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasableCancelHandler}
        >
          <OrderSummary
            price={this.props.price}
            ingredients={this.props.ings}
            purchasableCancelled={this.purchasableCancelHandler}
            purchasableContinued={this.purchasableContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.props.ings} />
        <BurgerControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemove}
          disabled={disabledInfo}
          purchasable={this.updatePurchaseState(this.props.ings)}
          price={this.props.price}
          ordered={this.purchasableHandler}
        />
      </AuxChildren>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch({ type: actionTypes.ADD_INGEDIENT, ingredientName: ingName }),
    onIngredientRemove: ingName =>
      dispatch({ type: actionTypes.REMOVE_INGEDIENT, ingredientName: ingName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
