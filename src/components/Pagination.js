import React,{Component} from 'react';
import './Pagination.css';


class Pagination extends Component{
    state={
        list: this.props.friends,
        numberOfPages:"",
        numberNeedToShow: 2,
        }
      
    getNumberOfPages = () => {
        const num = Math.ceil(this.state.list.length / 2);
        this.setState({ numberOfPages: num });
      };
    
    componentWillReceiveProps(nextProps) {
      this.setState({
        list: nextProps.friends,
      }, () => this.getNumberOfPages())
    }
    
    render(){
        const {numberOfPages}=this.state;
        return(
            <div className="review__pagination">
                <nav>
                    <ul className="pagination">
                    {this.props.friends.map((ele,index)=>(
                        (index < numberOfPages)  && numberOfPages != 1 && (
                        <li className="page-item" key={`pagination-index-${index}`}>
                        <button className={this.props.activePage === index + 1 && 'active'} onClick={ () => this.props.handlePagination(index + 1)}>
                            {index+1 }
                        </button>
                        </li>
                        )
                    ))}
                    </ul>
                </nav>
            </div>

        )
    }
} 

export default Pagination


