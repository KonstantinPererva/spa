import css from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
    return (
        <nav className={css.menu}>
            <div className={css.menuItem}>
                <a href="#" className={css.menuLink}><span>Item</span></a>
            </div>

            <div className={css.menuItem}>
                <a href="#" className={css.menuLink}><span>Item2</span></a>
            </div>

            <div className={css.menuItem}>
                <a href="#" className={css.menuLink}><span>Item3</span></a>
            </div>
        </nav>
    );
}

export default HeaderMenu;