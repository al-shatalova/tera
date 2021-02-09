'use strike';

const e = React.createElement;
class LikeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {liked:false};
	};
	
	render(){
		if(this.state.liked){
			return 'You liked coment number' + this.props.commentID
		}
		
		return e(
			'button',
			{onclick: () => this.setState({liked:true})},
			'Like'
		);
	}
};

const domContainer = document.querySelector('#like_button_container');
ReactDom.render(e(LikeButton), domContainer);

document.querySelectorAll('.like_button_container').forEach(domContainer => {
	const commentID = parseInt(domContainer.dataset.commentid, 10);
	ReactDom.render(
		e(LikeButton, {commentID: commentID}),
		domContainer
	);
});