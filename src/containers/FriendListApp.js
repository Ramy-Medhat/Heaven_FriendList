import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import Pagination from '../components/Pagination';
import SelectGender from '../components/SelectGender';

/**
 * ToDo fix delete elements in the second page.
 */
class FriendListApp extends Component {

  state = { 
    displayedFriends: [],
    pageNumber: 1,
    selectGender: ''
  }

  componentDidMount() {
    const { friendlist: { friendsById }} = this.props;
    this.setState({
      displayedFriends: friendsById.slice(0, 2)
    })
  }

  componentWillReceiveProps(nextProps) {
    const { friendlist: { friendsById }} = nextProps;
    let displayedFriends = friendsById.slice((this.state.pageNumber * 2 ) - 2, this.state.pageNumber * 2);
    let activePage = this.state.pageNumber; 
    if ( displayedFriends.length === 0  && this.state.pageNumber > 1) {
      displayedFriends = friendsById.slice(((this.state.pageNumber - 1) * 2 ) - 2, (this.state.pageNumber - 1) * 2);
      activePage = this.state.pageNumber - 1;
    }
    this.setState({
      displayedFriends,
      pageNumber: activePage
    })
  }

  handlePagination = pageNumber => {
    const { friendlist: { friendsById }} = this.props;

    const maxNumber = pageNumber * 2;

    this.setState({
      displayedFriends: friendsById.slice(maxNumber - 2, maxNumber),
      pageNumber,
    })
  }


  handleGenderChange = (gender) =>{
    console.log(gender);
    this.setState({
      selectGender: gender
    })
  }

  
  render () {

    const { friendlist: { friendsById }} = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList pageNumber={this.state.pageNumber} displayedFriends={this.state.displayedFriends} actions={actions} />
        <Pagination activePage={this.state.pageNumber} friends={friendsById} handlePagination={this.handlePagination}  />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
