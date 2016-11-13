import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class GameItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {show : false};
        this.openModal = this.openModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    hideModal(){
        this.setState({show: false})
    };

    openModal(){
        this.setState({show: true})
    };

  render() {
    return (
        <div className="col-md-3">
            <div onClick={this.props.imgClassName ? this.openModal : null} className="panel panel-item-body">
                <div className={this.props.imgClassName}>
                    {!this.props.imgClassName ? '+ add' : null}
                </div>
                {this.props.name ?
                    <div className="panel-item-footer">
                        {this.props.name}
                    </div> : null
                }
            </div>
            <Modal
                {...this.props}
                show={this.state.show}
                onHide={this.hideModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Play!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Live Roulette...</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.hideModal}>Close</Button>
                    <Button onClick={this.hideModal}>Play</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
}

GameItemComponent.propTypes = {
    imgClassName: PropTypes.string,
    name: PropTypes.string
};

export default GameItemComponent;
