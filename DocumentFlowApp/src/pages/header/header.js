import React, { Fragment } from "react";
import { styles } from "../../styles";
import { localStyles } from "./header-styles";
import { connect } from "react-redux";
class Header extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>Header</Text>;
  }
}
mapStateToProps = (state) => {
  return {};
};
mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
