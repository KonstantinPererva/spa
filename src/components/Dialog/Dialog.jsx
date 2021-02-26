import css from "./Dialog.module.scss";
import DialogItem from "./DialogItem";
import Message from "./Message";
import state from "../../redux/state";

const Dialog = (props) => {

    let dialogsElement = state.dialogPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messageElement = state.profilePage.posts.map(message => <Message key={message.id} message={message.message} id={message.id} />);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={css.messages}>
                <div className={css.messagesList}>
                    {messageElement}
                </div>

                <div className={css.addMessage}>
                    <div className={css.field}>
                        <textarea cols="30" rows="5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;