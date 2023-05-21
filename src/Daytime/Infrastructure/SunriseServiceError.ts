export default class SunriseServiceError extends Error {
  constructor({ error, lat, lng }: { error: unknown; lat: number; lng: number }) {
    super('SunriseServiceError')
    console.error(`Data could not be fetched for the provided latitude and longitude`, {
      error,
      lat,
      lng
    })
  }
}
