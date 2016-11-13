import React, { Component, PropTypes } from 'react';
import Progress from 'react-progress-2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import TopBarComponent from './topbar/component';
import MarketComponent from './market/component';
import GameItemComponent from './gameItem/component';
import RecentComponent from './recentWinners/component';
import BigComponent from './bigWinners/component';
import PromotionComponent from './promotion/component';

class BaseComponent extends Component {

  render() {
    return (
      <div className="wrapper">
        <TopBarComponent />
        <div className="content-page">
          <div className="content">
            <div className="container">
                <MarketComponent />
                <div className="row">
                    <GameItemComponent imgClassName="dao-casino" name="LIVE ROULETTE"/>
                    <GameItemComponent />
                    <GameItemComponent />
                    <GameItemComponent />
                    <GameItemComponent />
                    <GameItemComponent />
                    <GameItemComponent />
                    <GameItemComponent />
                </div>
                <div className="row">
                    <RecentComponent />
                    <BigComponent />
                    <PromotionComponent />
                </div>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

BaseComponent.propTypes = {
  children: PropTypes.element.isRequired
};

export default BaseComponent;
