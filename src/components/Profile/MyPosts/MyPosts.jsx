import css from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={css.wrapper}>
            <Post message="Hi, how are you" />
            <Post message="It`s my first post" />
            <Post message="Dgfdfd df df fd df" />
            <Post message="Vsdf sdf fdsf sdf dsf sdfsd" />
        </div>
    );
}

export default MyPosts;