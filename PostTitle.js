import "./styles.css"

export default function PostTitle(props) {
    return (
        <h2 className="blog-post-title">
            <span className="entry-title">
                {props.title}
            </span>
        </h2>
    )
}