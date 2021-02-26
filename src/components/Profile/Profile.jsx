import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Dialog from "../Dialog/Dialog";
import css from "./Profile.module.scss";
import '../../app.css';
import {Route} from "react-router-dom";
import React from "react";

const Profile = (props) => {
    return (

        <div className={css.wrapper}>
            <Header />
            
            <div className={css.content}>
                <Aside />
                <Route path="/profile" render={() => <Main state={props.state.profilePage} addPost={props.addPost} />}/>
                <Route path="/dialog" component={() => <Dialog />}/>
            </div>

            <Footer />
        </div>

    );
}

export default Profile;