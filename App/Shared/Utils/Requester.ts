import axios, { AxiosInstance, AxiosPromise } from 'axios';

export default class Requester {
  private static instance: Requester;
  private api!: AxiosInstance;

  static getInstance() {
    if (!Requester.instance) {
      Requester.instance = new Requester();
      Requester.instance.api = axios.create({
        headers: { 'content-type': 'application/json' }
      });
    }
    return Requester.instance;
  }

  Get(url: string): AxiosPromise<any> {
    return Requester.instance.api.get(url);
  }

  getWeatherByCityName(cityName: string): AxiosPromise<any> {
    return Requester.instance.api.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=8d671d088abd814a3632b7f6c5f36c47&units=metric`
    );
  }
}
