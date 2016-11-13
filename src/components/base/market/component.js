import React, { Component, PropTypes } from 'react';

class MarketComponent extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-market">
                    <div className="col-md-offset-9 col-md-3 panel-market-layout">
                        <div className="panel-heading">
                            <h5>TOTAL JACKPOTS</h5>
                            <h4>3 339.033 ETH</h4>
                        </div>
                        <div className="panel-heading">
                            <h5>TOTAL WAGERED</h5>
                            <h4>75 390 390.702 ETH</h4>
                        </div>
                        <div className="panel-heading">
                            <h5>NUMBER OF BETS</h5>
                            <h4>8 099 373</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MarketComponent;
