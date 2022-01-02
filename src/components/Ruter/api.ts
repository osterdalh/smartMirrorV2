import { stopPlaces } from './types'
import { Departure } from '@entur/sdk'


const createEnturClient = require('@entur/sdk').default
const enturClient = createEnturClient({
    clientName: 'smartMirrorNew',
})

export const getdeparturesFromStop = async (id: string):Promise<Departure[]> => {
    try {
        const departures = await enturClient.getDeparturesFromStopPlace(stopPlaces[0].id)
        console.log("get departures called", departures)
        return departures
    }
    catch (err) {
        console.log(err)
        throw(err)
    }
}