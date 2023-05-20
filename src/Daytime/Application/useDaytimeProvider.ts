import IDaytimeRepository from '../Domain/IDaytimeRepository'

export default function useDaytimeProvider<T>(
  daytimeRepository: IDaytimeRepository<T>,
  lat: number,
  lng: number
) {
  return daytimeRepository.getSunlightTimes(lat, lng)
}
