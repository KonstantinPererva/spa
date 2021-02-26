import React from 'react';
import logo from "../../logo.svg";
import css from "./Main.module.scss";
import MyPosts from "../Profile/MyPosts/MyPosts";

const Main = (props) => {
    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
    }

    return (
        <main className={css.main}>
            <div className={css.card}>
                <div className={css.ava}>
                    <img src={logo} alt="ava"/>
                </div>

                <div className={css.descr}>
                    <div className={css.name}>
                        <span>Kostya K.</span>
                    </div>

                    <div className={css.dateBirth}>
                        <span>Date of Birth: </span>
                        <span>4 april</span>
                    </div>

                    <div className={css.city}>
                        <span>City: </span>
                        <span>Kharkov</span>
                    </div>

                    <div className={css.education}>
                        <span>Education: </span>
                        <span>IAPM</span>
                    </div>

                    <div className={css.site}>
                        <span>Web site: </span>
                        <span>https://www.iiiiii.com</span>
                    </div>
                </div>
            </div>

            <div className={css.posts}>
                <div className={css.postsTitle}>
                    <span>My posts</span>
                </div>

                <div className={css.form}>
                    <div className={css.formRow}>
                        <textarea
                            className={css.textarea}
                            ref={newPostElement}
                            value={props.state.newPostText}
                            onChange={onPostChange}
                        />
                    </div>

                    <div>
                        <button type="button" onClick={addNewPost}>Add post</button>
                    </div>
                </div>
            </div>

            <div className={css.posts}>
                <MyPosts state={props.state}/>
            </div>
        </main>
    );
}

export default Main;