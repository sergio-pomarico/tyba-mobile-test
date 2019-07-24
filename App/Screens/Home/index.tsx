import React, { Component, Dispatch } from 'react';
import { Text, View, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Button } from '../../Shared';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';

import { getWeatherByCityCoord } from '../../Store/weather/actions';
import { Weather } from '../../Interfaces/models';
import { Icon } from '../../Shared';
import { Icons } from './const';
import styles from './styles';

interface Props {
  dispatch: Dispatch<AnyAction>;
  weather: Weather;
}

class HomeScreen extends Component<Props, {}> {
  getCityNameByCords = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.props.dispatch(getWeatherByCityCoord(latitude, longitude));
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  getWeatherIcon(weather: string) {
    let iconName = weather.toLowerCase();
    if (iconName === 'drizzle') {
      iconName = 'showers';
    }
    if (iconName === 'clouds') {
      iconName = 'cloudy';
    }
    const nowHours = new Date().getHours();
    let time = nowHours > 7 && nowHours < 17 ? 'day' : 'night-alt';
    if (time === 'night-alt' && iconName === 'clear') {
      time = 'night';
    }
    const icon = `wi-${time}-${iconName}`;
    return Icons.includes(icon) ? icon : 'N/A';
  }

  render() {
    const { weather, weatherError } = this.props;
    return (
      <View style={styles.container}>
        {weather && (
          <View style={styles.mainInfo}>
            <Text style={styles.cityName}>{weather.name}</Text>
            <Text style={styles.temp}>{weather.main.temp}°</Text>
            {this.getWeatherIcon(weather.weather[0].main) !== 'N/A' && (
              <Icon
                name={this.getWeatherIcon(weather.weather[0].main)}
                style={styles.weatherIconMain}
              />
            )}
            <Text style={styles.weather}>{weather.weather[0].main}</Text>
          </View>
        )}
        {weatherError === 'NOT_FOUND' && (
          <Text style={styles.cityNotFound}>City not found</Text>
        )}
        <Button
          text={'Get location'}
          onPress={() => this.getCityNameByCords()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ weather }: any) => ({
  weather: weather.weather,
  weatherError: weather.error
});

export default connect(mapStateToProps)(HomeScreen);
