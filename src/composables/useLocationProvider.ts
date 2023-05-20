export const useLocationProvider = () => {
  return {
    getCurrentPosition() {
      const defaultPosition = {
        lat: 38.907192,
        lng: -77.036873
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          return {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      }
      return defaultPosition
    }
  }
}
