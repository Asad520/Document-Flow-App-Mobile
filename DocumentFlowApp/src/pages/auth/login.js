import React, { Fragment } from "react";
import { connect } from "react-redux";
import { styles } from "../../styles/styles";
import * as TASKS from "../../store/actions/index";
import { SafeAreaView, Text, StatusBar, ScrollView } from "react-native";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Text>Login</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
mapStateToProps = (state) => {
  return {
    isLoading: state.ui.isLoading,
  };
};
mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(TASKS.loginAction(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
