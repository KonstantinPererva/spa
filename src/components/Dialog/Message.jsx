import css from "./Dialog.module.scss";

const Message = (props) => {
    return (
        <div className={css.item}>{props.message}</div>
    );
}

export default Message;