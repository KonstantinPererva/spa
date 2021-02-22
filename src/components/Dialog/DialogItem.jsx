import {NavLink} from "react-router-dom";
import css from "./Dialog.module.scss";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;

    return (
        <NavLink to={path} className={css.item}>{props.name}</NavLink>
    );
}

export default DialogItem;