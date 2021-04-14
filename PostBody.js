import "./styles.css"

export default function PostBody(props) {
    return (
        <div className="post-body">
            <p>{props.content}</p>
        </div>
    )
}