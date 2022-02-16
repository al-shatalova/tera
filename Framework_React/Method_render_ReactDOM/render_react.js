class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, world!' };
    };

    handleChange(e) {
        this.setState({ value: e.target.value });
    };

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    };

    render() {
        return (
            <div className="Editor">

            <label htmlFor="markdown-content">Enter some points</label>

            <input type="text" value={value} onChange={event=>this.handleChange}/>

            <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}/>

        </div>
        );
    };
}

ReactDOM.render(
    <Editor></Editor>,
    document.getElementById("sev_comments")
);