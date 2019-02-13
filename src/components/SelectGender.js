import React,{Component} from 'react';
import './SelectGender.css';

class SelectGender extends Component{

    state = {
        checked:'male'
    }

    handleGenderChange=(e)=>{
        this.setState({
            checked:e.target.value
        })
        this.props.GenderChange(e.target.value)
    }

    render(){
        return(
            <div>
                    <label>
                        <input
                        type="radio"
                        name="react-tips"
                        value="male"
                        checked={this.state.checked === 'male'}
                        onChange={this.handleGenderChange}
                        className="form-check-input"
                        />
                        Male
                    </label>
    
                    <label>
                        <input
                        type="radio"
                        name="react-tips"
                        value="female"
                        checked={this.state.checked === 'female'}
                        onChange={this.handleGenderChange}
                        className="form-check-input"
                        />
                        Female
                    </label>
            </div>
        )
    }
} 


export default SelectGender;