import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import withOutsideClick from './withOutsideClick';
import styles from './styles';

const ModalContent = ({
  outsideClick, toggle, children, header, footer
}) => {
  useEffect(() => {
    if (outsideClick) {
      toggle();
    }
  }, [outsideClick]);
  
  return (
    <div align="center" style={styles.content}>
      <div style={styles.header} className="modbox-header">{header}</div>
      {children}
      <div style={styles.footer} className="modbox-footer">{footer}</div>
    </div>
  );
};

ModalContent.propTypes = {
  outsideClick: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

ModalContent.defaultProps = {
  header: undefined,
  footer: undefined
};

const Content = withOutsideClick(ModalContent, false);

const Modal = ({
  isShowing, toggle, children, header, footer
}) => (isShowing
  ? ReactDOM.createPortal(
    <div style={styles.container}>
      <Content header={header} footer={footer} toggle={toggle}>
        {children}
      </Content>
    </div>,
    document.body
  )
  : null);

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Modal.defaultProps = {
  header: undefined,
  footer: undefined
};

export default Modal;