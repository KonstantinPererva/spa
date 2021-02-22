import Menu from "../Menu/Menu";
import css from "./Aside.module.scss";

const Aside = () => {
    return (
        <aside className={css.aside}>
            <Menu />
        </aside>
    );
}

export default Aside;