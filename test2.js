'use strict'

const e = React.createElement;

class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Лайк за попытку сдать работу))"
    );
  }
}

class LikeButton extends React.Component {
  constructor(props){
      super(props);
      this.state = { liked: false };
  }

  render() {
      if (this.state.liked) {
          return 'You liked this.' + this.props.commentID;
      }
      return e(
          'button',
          { onClick: () => this.setState({ liked: true}) },
          'Like'
      );

  }
}

const domContainer = document.querySelector('.like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        console.log(commentID)
        ReactDOM.render(
            e(LikeButton, { commentID: commentID }),
            domContainer
        );
    });

ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), 
document.getElementById('hello-example'));