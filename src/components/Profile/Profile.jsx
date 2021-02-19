import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import css from "./Profile.module.scss";
import './../app.css';

const Profile = () => {
    return (
        <div className={css.wrapper}>
            <Header />

            <div className={css.content}>
                <Aside />

                <Main />
            </div>

            <Footer />
        </div>
    );
}

export default Profile;