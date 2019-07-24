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

  getCityNameByCords({
    latitude,
    longitude
  }: {
    latitude: number;
    longitude: number;
  }): AxiosPromise<any> {
    return Requester.instance.api.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=570fde810b524c158c10011a6b35089a`
    );
  }

  getWeatherByCityName(city: string): AxiosPromise<any> {
    return Requester.instance.api.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a3a60021531a13c454cc1facb1498bf3&units=metric`
    );
  }
}
