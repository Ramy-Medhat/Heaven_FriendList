import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

const  FriendList = ({ displayedFriends, pageNumber, actions }) =>
     ( <ul className={styles.friendList}>
        {
          displayedFriends.length > 0 ? displayedFriends.map((friend, index) => 
              <FriendListItem
                key={index}
                id={index  === 0  ? pageNumber === 1 ? 0 : pageNumber  * 2 - 2: pageNumber * 2 - 1}
                name={friend.name}
                gender={friend.gender}
                starred={friend.starred}
                {...actions} />
            ) 
          :
          <p className='custom-label'>there is no friends</p>
        }
      </ul>
    );

FriendList.propTypes = {
  displayedFriends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
