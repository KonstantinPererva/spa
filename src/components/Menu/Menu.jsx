import css from "./Menu.module.scss";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={css.menu}>
            <div className={css.menuItem}>
                <NavLink to="/profile" className={css.menuLink} activeClassName={css.active}><span>Item</span></NavLink>
            </div>

            <div className={css.menuItem}>
                <NavLink to="/dialog" className={css.menuLink} activeClassName={css.active}><span>Item2</span></NavLink>
            </div>

            <div className={css.menuItem}>
                <NavLink to="/dialog" className={css.menuLink} activeClassName={css.active}><span>Item3</span></NavLink>
            </div>
        </nav>
    );
}

export default Menu;