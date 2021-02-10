import React from 'react';
import Button from 'react-bootstrap/Button';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLiked: false 
    };
    this.pressLike = this.pressLike.bind(this);
  }
  pressLike() {
    this.setState(state => ({
      isLiked: !state.isLiked
    }));
  }

  render() {
    return(
      <div className="container">
        <Button 
        variant="outline-danger"
        onClick={this.pressLike}
        >{this.state.isLiked ? "Remove Like" : "Like"}</Button>
        <p>{this.state.isLiked ? "You Liked This" : " You don't like this"}</p>
      </div>


    );
    
  }
}

export default LikeButton;
