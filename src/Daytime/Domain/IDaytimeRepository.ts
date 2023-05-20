export default interface IDaytimeRepository<T> {
  getSunlightTimes(lat: number, lng: number): Promise<T>
}
