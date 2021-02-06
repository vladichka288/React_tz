import React, { useState, useEffect } from "react";
import PurchaseComponent from "../createPurchase/createPurchase";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Product from "../../components/ListElement/ListElement";
import classes from "./listView.module.css";
const ListView = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    let listFromProps = [...props.list];
    setList(
      listFromProps
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .sort((a, b) => a.priority - b.priority)
    );
  }, [props.list]);
  const removeProduct = (indexEle) => {
      console.log(indexEle);
    let newList = list.filter((item, index) => indexEle !== index);
    props.onRemoveProduct(newList);
  };
  return (
    <React.Fragment>
      <ul className={classes.List}>
        {list.map((element, index) => {
          return (
            <Product
              {...element}
              index={index}
              removeProductFunc={() => removeProduct(index)}
            />
          );
        })}
      </ul>
      <PurchaseComponent />
    </React.Fragment>
  );
};
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
    onRemoveProduct: (list) => dispatch(actions.removeProduct(list)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
