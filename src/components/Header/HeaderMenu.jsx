import css from "./HeaderMenu.module.scss";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <nav className={css.menu}>
            <div className={css.menuItem}>
                <NavLink to="/profile" className={css.menuLink}><span>Item</span></NavLink>
            </div>

            <div className={css.menuItem}>
                <NavLink to="/dialog" className={css.menuLink}><span>Item2</span></NavLink>
            </div>

            <div className={css.menuItem}>
                <NavLink to="/dialog" className={css.menuLink}><span>Item3</span></NavLink>
            </div>
        </nav>
    );
}

export default HeaderMenu;