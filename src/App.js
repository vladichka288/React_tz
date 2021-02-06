import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import listView from "./containers/listView/listView";
import entryView from "./containers/entryView/entryView";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";
const App = (props) => {
  useEffect(() => {
    props.onUploadList();
  }, []);
  let routes = (
    <Switch>
      <Route path="/listView" component={listView} />
      <Route path="/entryView" component={entryView} />
      <Redirect to="/listView" />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUploadList: () => dispatch(actions.uploadList()),
  };
};
export default connect(null, mapDispatchToProps)(App);
