import { createContainer, asClass, asFunction } from 'awilix'
import SunriseSunsetApi from '@/Daytime/Infrastructure/SunriseSunsetApi'

export default {
  install: (app) => {
    const daytimeRepository = new SunriseSunsetApi()
    createContainer().register({
      daytimeRepo: asFunction(() => daytimeRepository)
    })

    app.provide('daytimeRepository', daytimeRepository as SunriseSunsetApi)
  }
}
