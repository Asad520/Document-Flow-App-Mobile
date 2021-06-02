import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppContext } from "./context";
import { AppContainer } from "./navigation";
import * as util from "./utilities";

class Decider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppContext.Provider>
        <AppContainer
          ref={(navigatorRef) => {
            util.setTopLevelNavigator(navigatorRef);
          }}
        />
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decider);
