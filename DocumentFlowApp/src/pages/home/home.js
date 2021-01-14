import React, { Fragment } from "react";
import { connect } from "react-redux";
import { styles } from "../../styles";
import { localStyles } from "./home-styles";
import { ScrollView, Text, StatusBar } from "react-native";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <ScrollView style={styles.body}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Text>Home Page</Text>
        </ScrollView>
      </ScrollView>
    );
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
)(Home);
