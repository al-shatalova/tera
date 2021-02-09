'use strict';

const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentid;
        }

        return e(
            'button', { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainter = document.querySelectorAll('.like_button_container')
    .forEach(domContainter => {
        const commentid = parseInt(domContainter.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentid: commentid }),
            domContainter
        );
    });