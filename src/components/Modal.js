import React from 'react';
import ReactDom from 'react-dom';
import { Button } from './generic/Buttons';

/**
 * Create a modal window.
 * When props.isOpen is true, the component renders.
 * The props.onClose is function to close modal window.
 * 
 * Get object props:
 *                  {
 *                      title: string,
 *                      isOpen: boolean,
 *                      onClose: function,
 *                      children: array
 *                  }
 */

 export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        document.getElementById('container').style.opacity = this.props.isOpen ? '0.5' : '1';
    }

    render() {
        const { title,
                isOpen,
                onClose,
                children: Component } = this.props;
        const parent = document.getElementById('root');
        const children = (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content board">
                        <div className="modal__header modal-header">
                            <h5 className="modal__title modal-title">{title}</h5>
                            <Button name="X" onClick={onClose} color="red" />
                        </div>
                        <div className="modal__body modal-body">
                            <Component />
                        </div>
                    </div>
                </div>
            </div>
        );

        return isOpen ? ReactDom.createPortal(children, parent) : null;
    }
}