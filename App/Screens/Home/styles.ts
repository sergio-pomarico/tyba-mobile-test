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
    color: '#A2A2A2'
  },
  temp: {
    fontSize: 80,
    fontWeight: '800',
    color: '#A2A2A2'
  },
  weatherIconMain: {
    fontSize: 150,
    marginTop: -20,
    marginBottom: -10,
    color: '#A2A2A2'
  },
  weather: {
    fontSize: 16,
    color: '#A2A2A2'
  },
  cityNotFound: {
    color: '#F44336',
    fontSize: 14,
    width: '100%',
    textAlign: 'center'
  },
  email: {
    color: '#212121',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30
  }
});

export default styles;
