import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const withOutsideClick = (Component, initialState = true) => {
  const Container = (props) => {
    const [outsideClick, setOutsideClick] = useState(initialState);
    const detectOutsideClicks = (ref) => {
      const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOutsideClick(true);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      });
    };
    const wrapperRef = useRef();
    detectOutsideClicks(wrapperRef);

    return (
      <div
        role="presentation"
        onKeyPress={() => setOutsideClick(false)}
        onClick={() => setOutsideClick(false)}
        ref={wrapperRef}
      >
        <Component {...props} outsideClick={outsideClick} />
      </div>
    );
  };

  Container.propTypes = {
    onClick: PropTypes.func,
  };
  Container.defaultProps = {
    onClick: () => {},
  };

  return Container;
};

export default withOutsideClick;
