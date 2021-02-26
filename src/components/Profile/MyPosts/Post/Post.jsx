import css from "./Post.module.scss";

const Post = (props) => {
    return (
        <div className={css.wrapper}>
            {props.postMessage}
        </div>
    );
}

export default Post;