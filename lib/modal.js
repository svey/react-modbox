import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import withOutsideClick from './withOutsideClick';
import styles from './styles';
import { serializeClasses } from './utilities';

const ModalContent = ({
  outsideClick, toggle, children, header, footer
}) => {
  useEffect(() => {
    if (outsideClick) {
      toggle();
    }
  }, [outsideClick]);

  return (
    <div className="modal-container" align="center" style={styles.content}>
      <div style={styles.contentHeader} className="modal-header">
        {header}
      </div>
      {children}
      <div style={styles.contentFooter} className="modal-footer">
        {footer}
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  outsideClick: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  header: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ModalContent.defaultProps = {
  header: undefined,
  footer: undefined,
};

const Content = withOutsideClick(ModalContent, false);

const Modal = ({
  isShowing, toggle, children, header, footer, className
}) => (isShowing
  ? ReactDOM.createPortal(
    <div className={serializeClasses([className])} style={styles.container}>
      <Content  header={header} footer={footer} toggle={toggle}>
        {children}
      </Content>
    </div>,
    document.body,
  )
  : null);

Modal.propTypes = {
  className: PropTypes.string,
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  header: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Modal.defaultProps = {
  className: undefined,
  header: undefined,
  footer: undefined,
};

export default Modal;
