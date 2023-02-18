import ReactDOM from 'react-dom';

import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

function ErrorModal(props) {

    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById('backdrop-root'))
            }
            { ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} /> , document.getElementById('overlay-root'))}
        </React.Fragment>
    )
    
};

export default ErrorModal;