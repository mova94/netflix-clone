import React from 'react';
import './Show.css'
class Show extends React.Component{
    handleRemove = () => {
        this.props.handleRemove(this.props.show);
    };

    render(){
        return(
            <div className="col-md-4">
                <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>
                        {this.props.show.title}
                    </h3>
                </div>
                     

                    <img src={this.props.show.img} onMouseEnter={this.props.handleShowDelete} alt={this.props.show.title}/>
                    
                    {this.props.showButton && 
                    <div className="row">
                    
                        <button 
                        className="btn btn-danger" 
                        onClick={this.handleRemove}>
                            Remove
                        </button>
                    </div>
                    }
                </div>
                
            </div>
        )
    }
}

export default Show;