import React, { Component, PropTypes } from 'react';

class PromotionComponent extends Component {
  render() {
    return (
        <div className="col-md-4">
            <div className="panel panel-statistics">
                <h1 className="newBG">Promotion Results</h1>
                <div className="recent-big">
                    <span><img src='/src/assets/images/img1.png'/></span>
                    <span>Deposit Bonus</span>
                    <span>579.05000 ETH</span>
                </div>
                <div className="recent-big">
                    <span><img src='/src/assets/images/img2.png'/></span>
                    <span> Affiliate Program</span>
                    <span>1400.40000 ETH</span>
                </div>
                <div className="recent-big">
                    <span><img src='/src/assets/images/img3.png'/></span>
                    <span>Loyalty Program</span>
                    <span>1290.05000 ETH</span>
                </div>
            </div>
        </div>
    );
  }
}

export default PromotionComponent;
