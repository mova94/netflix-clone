import React from 'react';
import './Recommendation.css'

class Recommendation extends React.Component{

    handleAdd = () => {
        this.props.handleAdd(this.props.recommendation)
    }
    render(){
        return(
            <div className="col-md-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>
                        {this.props.recommendation.title}
                        </h3>
                    </div>

                    <img 
                    src={this.props.recommendation.img} 
                    onMouseEnter={this.props.handleShowAdd} 
                    alt={this.props.recommendation.title}/>

                    {this.props.showButton &&
                    <div className="row"> 
                        
                        <button 
                        className="btn btn-success" 
                        onClick={this.handleAdd}>
                        Add To List
                        </button>
                    
                    </div>
                    }
                </div>
                
            </div>
        )
    }
}

export default Recommendation;