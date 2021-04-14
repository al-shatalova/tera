import React from "react";
import "./styles.css"
import PostImage from "./PostImage";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";


export default function Post(props) {
    return (
        <div className="blog-post">
            <a className="blog-post-link" href={props.post_url}>
                <PostImage img={props.img} title={props.title}/>
                <PostTitle title={props.title}/>
            </a>
            <PostBody content={props.content}/>
        </div>
    )
}