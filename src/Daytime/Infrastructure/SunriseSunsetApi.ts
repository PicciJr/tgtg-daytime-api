import IDaytimeRepository from '../Domain/IDaytimeRepository'
import { SunriseSunsetApiDTO } from '../Dtos/SunriseSunsetApiDTO'
import SunriseServiceError from './SunriseServiceError'

export default class SunriseSunsetApi implements IDaytimeRepository<SunriseSunsetApiDTO> {
  constructor(
    private _baseUrl = 'https://api.sunrisesunset.io/json',
    private _date = 'today',
    private _timezone = 'CEST'
  ) {}

  async getSunlightTimes(lat: number, lng: number): Promise<SunriseSunsetApiDTO> {
    try {
      const response = await fetch(
        `${this._baseUrl}?lat=${lat}&lng=${lng}&date=${this._date}&timezone=${this._timezone}`
      )
      return response.json()
    } catch (error) {
      throw new SunriseServiceError({ error, lat, lng })
    }
  }

  withDate(date: string): SunriseSunsetApi {
    this._date = date
    return this
  }

  withTimezone(timezone: string): SunriseSunsetApi {
    this._timezone = timezone
    return this
  }
}
