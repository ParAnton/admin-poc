/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import AdminButton, { Button } from '../../components/AdminButton/index';

export class Admin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log("render");
    return (
      <article>
        Admin container username: {this.props.username}
        <Button onClick={this.props.changeUsername}> ändra användare </Button>
      </article>
    );
  }
}

Admin.propTypes = {
};

const mapStateToProps = (state) => {
  console.log("mapstate");
  return {
    username: state.getIn(['home', 'username']),
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    changeUsername: () => dispatch({ type: 'boilerplate/Home/CHANGE_USERNAME', name: "Christian" }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
