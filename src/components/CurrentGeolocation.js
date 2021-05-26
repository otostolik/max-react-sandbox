import React from 'react';

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100vh'
  };

class CurrentGeolocation extends React.Component {
    state = { 
        lat: null,
        lng: null,
        errorMessage: '' 
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
          console.log(position)},
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        return (
          <div>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: this.state.lat,
                lng: this.state.lng
              }}
            >
                <Marker
                onClick={this.onMarkerClick}
                name={'This is test name'}
                />
            </Map>
          </div>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBRzMMFxLjcx718LYv0khTG-jVYQrrfwjU'
  })(CurrentGeolocation);