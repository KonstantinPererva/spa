import css from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.state.posts.map(post => <Post key={post.id} postMessage={post.message} />);

    return (
        <div className={css.wrapper}>
            {posts}
        </div>
    );
}

export default MyPosts;