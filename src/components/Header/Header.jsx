import logo from "../logo.svg";
import css from "./Header.module.scss";

const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} alt="img" className={css.logo} />
        </header>
    );
}

export default Header;