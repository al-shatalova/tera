import "./styles.css"

export default function PostImage(props) {
    return (
        <span className="blog-post-preview">
            <img width="600" height="400" src={props.img} alt={props.img}/>
        </span>
    )
}