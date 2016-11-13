import React, { Component, PropTypes } from 'react';

class BigComponent extends Component {
  render() {
    return (
        <div className="col-md-4">
            <div className="panel panel-statistics">
                <h1 className="newBG">Big Winners</h1>
                <div className="recent">
                    <span>CASINOJYJY</span>
                    <span>Casiono</span>
                    <span>1.0500000 ETH</span>
                </div>
                <div className="recent">
                    <span>PQRD555</span>
                    <span>Casiono</span>
                    <span>2.4000000 ETH</span>
                </div>
                <div className="recent">
                    <span>KATAR</span>
                    <span>Casiono</span>
                    <span>1.0500000 ETH</span>
                </div>
                <div className="recent">
                    <span>TONI</span>
                    <span>Casiono</span>
                    <span>1.1375000 ETH</span>
                </div>
                <div className="recent">
                    <span>CASINOJYJY</span>
                    <span>Casiono</span>
                    <span>1.1375000 ETH</span>
                </div>
                <div className="recent">
                    <span>SEVENSIL</span>
                    <span>Casiono</span>
                    <span>2.4000000 ETH</span>
                </div>
            </div>
        </div>
    );
  }
}

BigComponent.propTypes = {
    imgClassName: PropTypes.string,
    name: PropTypes.string
};

export default BigComponent;
