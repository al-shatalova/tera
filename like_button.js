'use strict';

const e = React.createElement;
const f = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  class LikeButton1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }

  render() {
    if (this.state.liked) {
        return 'You liked comment number ' + this.props.commentID;
    }
    return f(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like comment number'
      );
}
}



const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


document.querySelectorAll('.liked_buttom_container')
  .forEach(domContainer => {
      const commentID = parseInt(domContainer.dataset.commentID, 10);
      ReactDOM.render(
          e(LikeButton1, { commentID: commentID }),
          domContainer
      );
  });