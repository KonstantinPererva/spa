import css from "./Post.module.scss";

const Post = (props) => {
    console.log(props);

    return (
        <div className={css.wrapper}>
            {props.message}
        </div>
    );
}

export default Post;