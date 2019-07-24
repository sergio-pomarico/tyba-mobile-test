import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  mainInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 25,
    color: 'black'
  },
  temp: {
    fontSize: 80,
    fontWeight: '800',
    color: 'black'
  },
  weatherIconMain: {
    fontSize: 150,
    marginTop: -20,
    marginBottom: -10,
    color: 'black'
  },
  weather: {
    fontSize: 16,
    color: 'black'
  },
  cityNotFound: {
    color: '#F44336',
    fontSize: 14,
    width: '100%',
    textAlign: 'center'
  }
});

export default styles;
