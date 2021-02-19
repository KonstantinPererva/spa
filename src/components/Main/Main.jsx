import logo from "../logo.svg";
import css from "./Main.module.scss";

const Main = () => {
    return (
        <main className={css.main}>
            <div className={css.card}>
                <div className={css.ava}>
                    <img src={logo} alt="ava" />
                </div>

                <div className={css.descr}>
                    <div className={css.name}>
                        <span>Dmitry K.</span>
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

                <form action="!" className={css.form}>
                    <div className={css.formRow}>
                        <textarea type="text" className={css.input} />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Main;