import React from 'react';
import Show from './myshow/Show';
import Recommendation from './recommendation/Recommendation'


class Landing extends React.Component{
    state = {
        mylist: [
        {
            title:'Futurama',
            id: '1',
            img:  'http://cdn1.nflximg.net/webp/7621/3787621.webp',
        },
        {
            title: 'The Interview',
            id: 2,
            img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },

        {
        title: 'Gilmore Girls',
        id: 3,
        img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],
    recommendations: [

        {
        title: 'Family Guy',
        id: 4,
        img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
        title: 'The Croods',
        id: 5,
        img: 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        
        },
        {
        title: 'Friends',
        id: 6,
        img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
        ],
        showDelete:false,
        showAdd:false
    }

    //will get the recommendation from child component and add it to 'mylist' and remove it from 'recommendations'
    handleAdd = (recommendation) => {
        this.setState((prevState) => ({
            mylist: prevState.mylist.concat(recommendation),
            recommendations: prevState.recommendations.filter( r => r.id !== recommendation.id)
        }))
    }

    //will get the show from child component and change the state based upon id
    handleRemove = (show) => {
        this.setState((prevState) => ({
            mylist: prevState.mylist.filter(s => s.id !== show.id)
        }))
    }

    //toggle button on hover by changing state
    handleShowDelete = () => {
        this.setState((prevState) =>({
            showDelete: !prevState.showDelete
        }))
    }

    //toggle button on hover by changing state
    handleShowAdd = () =>{
        this.setState((prevState) =>({
            showAdd: !prevState.showAdd
        }))
    }
    render(){
        return(
            <div>
                <h2 className="text-danger">My List:</h2>
                <div className="row text-center">
                    {
                        this.state.mylist.map((show) => (
                            <Show
                            show = {show}
                            key = {show.id}
                            showButton = {this.state.showDelete}
                            handleShowDelete = {this.handleShowDelete}
                            handleRemove = {this.handleRemove}
                            />
                        ))    
                    }
                </div>
                
                <h2 className="text-danger">Recommendations:</h2>
                <div className="row text-center">
                    {
                        this.state.recommendations.map((recommendation) =>(
                            <Recommendation
                            recommendation = {recommendation}
                            key = {recommendation.id}
                            showButton = {this.state.showAdd}
                            handleAdd = {this.handleAdd}
                            handleShowAdd = {this.handleShowAdd}
                            />
                        ))
                    }
                </div>


            </div>
        )
    }
}

export default Landing;