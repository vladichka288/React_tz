import React, { Component } from "react";
import classes from "./createPurchase.module.css";
import Card from "../../components/UI/Card/Card";
import InputElement from "../../components/UI/Input/Input";
import ButtonElement from "../../components/UI/Button/Button";
import * as actionTypes from "../../store/actions/actionTypes";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class createPurchase extends Component {
  state = {
    controls: {
      productName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Product name",
        },
        label: "Product name",
        touched: false,
        value: "",
        validation: {
          required: true,
          valid: false,
          minLength: 1,
          isEmail: false,
        },
      },
      priority: {
        elementType: "select",
        elementConfig: {
          type: "",
          placeholder: "Product priority",
          options: ["1", "2", "3", "4", "5"],
        },
        label: "Product priority",
        touched: false,
        value: "1",
        validation: {
          required: true,
          valid: false,
          minLength: 1,
          maxLength: 5,
          isEmail: false,
        },
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        validation: {
          ...this.state.controls[controlName].validation,
          valid: this.checkValidity(
            event.target.value,
            this.state.controls[controlName].validation
          ),
        },
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.controls.priority.value)
    this.props.onAddProduct(
      this.state.controls.productName.value,
      this.state.controls.priority.value
    );
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    let form = formElementsArray.map((element) => {
      return (
        <InputElement
          key={element.id}
          changed={(event) => this.inputChangedHandler(event, element.id)}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          invalid={!element.config.validation.valid}
          value={element.config.value}
          shouldValidate={element.config.validation.required}
          touched={element.config.touched}
          label={element.config.label}
        />
      );
    });
    let error = null;
    if (this.props.error) {
      error = (
        <React.Fragment>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
          </style>
          <div className={classes.errorMessage}>{this.props.error}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Card titleName="Add Purchase" width="500px">
          <form className={classes.form} onSubmit={this.submitHandler}>
            {form}
            {error}
            <ButtonElement btnType="Success">OK</ButtonElement>
          </form>
        </Card>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.GroceryList.list,
    error: state.GroceryList.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (productName, productPriority) =>
      dispatch(actions.addProduct(productName, productPriority)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(createPurchase);
