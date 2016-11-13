import React, { Component, PropTypes } from 'react';
import FlipMove from 'react-flip-move';

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};


class RecentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {eths: []};
    }
    componentWillMount() {
        this.getNewEth();
    }

    getNewEth() {
        setTimeout(
            () => {
                let eths = this.state.eths;
                if (eths.length > 5) eths.pop();
                let eth = getRandom(0.01, 0.1);
                eth = eth.toString().slice(0, 8);
                eths.unshift(eth);
                this.setState({eths});
                this.getNewEth();
            }, getRandom(1000, 3000));
    };

      render() {
          const getRows = () => {
              return (
                  this.state.eths.map(eth =>
                  <div className="recent" key={eth}>
                      <span>TONI</span>
                      <span>Casiono</span>
                      <span>{`${eth} ETH`}</span>
                  </div>));
          };
        return (
            <div className="col-md-4">
                <div className="panel panel-statistics">
                    <h1 className="newBG">Recent Winners</h1>
                    <FlipMove enterAnimation="fade" leaveAnimation="fade">
                        {getRows()}
                    </FlipMove>
                </div>
            </div>
        );
      }
}

RecentComponent.propTypes = {
    imgClassName: PropTypes.string,
    name: PropTypes.string
};

export default RecentComponent;
