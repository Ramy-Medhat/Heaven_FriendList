import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';
import SelectGender from './SelectGender';

class AddFriendInput extends Component {

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
           />
        <SelectGender GenderChange={this.handleGenderChange}/>
      </form>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      selectGender: 'male'
    };
  }

  handleGenderChange = (gender) =>{
    console.log(gender);
    this.setState({
      selectGender: gender
    })
  }


  handleChange (e) {
    console.log('change event', e.target.value)
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const name = this.state.name.trim();
      this.props.addFriend(name, this.state.selectGender);
      this.setState({ name: '' });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
