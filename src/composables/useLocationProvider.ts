export const useLocationProvider = () => {
  return {
    getCurrentPosition() {
      const defaultPosition = {
        lat: 38.907192,
        lng: -77.036873
      }
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          },
          (error) => {
            resolve(defaultPosition)
          },
          {
            timeout: 1000
          }
        )
      })
    }
  }
}
