import React from 'react';
import './App.css';
import { Welcome } from './components/views/Welcome';
import { BeerList } from './components/views/BeerList';
import { Details } from './components/views/Details';
import logo from './img/logo.png';

import { connect } from 'react-redux';
import { fetchData } from './actions/fetchApi';
import { captureAge } from './actions/captureAge';
import { showDetails, captureIndex, showBeers, ifAdult } from './actions/handleClick';

class App extends React.Component {


  componentDidMount() {
    this.props.fetchBeers("https://api.punkapi.com/v2/beers?page=1&per_page=80");
  };

  componentDidUpdate() {

  }


  render() {
    return (
      <div>
      {!this.props.beerList &&
        <div>
          <img src={logo} alt="logo" className="logo" />
          <Welcome
            adult={this.props.isAdult}
            checkAge={() => {this.props.checkAge(this.props.age)}}
            passAge={this.props.passAge}
            list={this.props.toggleBeerList} />
        </div>
      }

      {(this.props.beerList && this.props.error) && alert('Unable to fetch data!')}

      {this.props.beerList && <BeerList
        beers={this.props.beers}
        details={this.props.toggleDetails}
        index={this.props.passIndex} />}

      {this.props.popUp && <Details
        beers={this.props.beers}
        details={this.props.toggleDetails}
        index={this.props.beerIndex} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.data,
    error: state.fetchError,
    popUp: state.showDetails,
    beerIndex: state.captureIndex,
    beerList: state.showBeers,
    age: state.captureAge,
    isAdult: state.ifAdult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    passAge: (age) => {
      dispatch(captureAge(age))
    },
    checkAge: (age) => {
      dispatch(ifAdult(age))
    },
    fetchBeers: (url) => {
      dispatch(fetchData(url))
    },
    toggleDetails: (bool) => {
      dispatch(showDetails(bool))
    },
    passIndex: (num) => {
      dispatch(captureIndex(num))
    },
    toggleBeerList: (bool) => {
      dispatch(showBeers(bool))
    }
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
