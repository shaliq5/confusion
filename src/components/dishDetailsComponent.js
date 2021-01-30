import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        return(
            
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        
        );
    }
    
    renderComments(comments){
        if(comments != null){
            const commentListItems = comments.map((comment) =>{
                return(
                    <li key={comment.id}>
                        <p>Rating - {comment.rating}</p>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US',{year : 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>   
                );
            });
    
            return(
                <Card className="col-12 col-md-5 m-1">
                <h4>Comments : </h4>
                <div className="container">
                <ul className="list-unstyled">{commentListItems}</ul>
                </div>
                </Card>
            );
        }
        else{
            return(
                <div>"ERROR 303"</div>
            );
        }
    }  
    render(){
      
        if(this.props.dish!=null){
        return(
            <div className="container" >
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>
            </div>
        );
        }
        else{
            return(<div></div>);
        }
        
    }
    
}

export default DishDetail;