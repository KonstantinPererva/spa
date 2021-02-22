import css from "./Dialog.module.scss";
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialog = (props) => {
    let dialogsData = [
        {id: 1, name: "Kostya"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Viktor"},
    ];

    let messageData = [
        {id: 1, message: "Lorem ipsum.", likesCount: 12},
        {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing.", likesCount: 4},
        {id: 3, message: "Lorem ipsum dolor sit amet.", likesCount: 7},
    ];

    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElement = messageData.map(message => <Message message={message.message} id={message.id} />);

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