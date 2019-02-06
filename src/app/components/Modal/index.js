import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '@/common';

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.3);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
  display: flex;
`;

const ModalContainer = styled.div`
  border-radius: 5px;
  margin: auto;
  padding: 20px;
  max-width: 900px;
  max-height: 90%;
  overflow-y: auto;
  background-color: ${COLORS.WHITE};
`;

class Modal extends PureComponent {
  static defaultProps = {
    children: null,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { close } = this.props;
    return close();
  }

  render() {
    const { children, show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <Overlay onClick={this.handleClick}>
        <ModalContainer onClick={e => e.stopPropagation()}>
          {children}
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Modal;
