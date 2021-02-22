import logo from "../../logo.svg";
import css from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.wrLogo}>
                <img src={logo} alt="img" className={css.logo} />
            </div>

            <HeaderMenu />
        </header>
    );
}

export default Header;