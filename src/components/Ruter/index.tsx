import { ListHeader } from '../List/style'
import { useState, useEffect } from 'react'
import { stopPlaces } from './types'
import { getdeparturesFromStop } from './api'

import { Departure } from '@entur/sdk'
import { RowContainer, RowData, RowName, RuterWrapper } from './styles'


const Ruter: React.FC = () => {

    const [departuresFromStop, setdeparturesFromStop] = useState<Departure[]>([]);

    const [uniqueDepartureRoutes, setUniqueDepartureRoutes] = useState<any[]>([])

    useEffect(() => {
        getdeparturesFromStop().then(data => {
            setdeparturesFromStop(data);
            setUniqueDepartureRoutes(getUniqueRouteIds(data))
        })
    }, []);

    const getDepartureTimes = (lineNr: string, frontText: string, stopDepartures: Departure[]) => {
        const maximumNrOfDepartureTimes = 3;
        console.log("lineNr", lineNr, frontText)
        const departureTimes = stopDepartures.filter(stopDeparture => {
            if (stopDeparture.serviceJourney.journeyPattern?.line.publicCode === lineNr && stopDeparture.destinationDisplay.frontText === frontText) {
                return stopDeparture.expectedDepartureTime

            }

        })
        return departureTimes.splice(0, maximumNrOfDepartureTimes)
    }


    const getUniqueRouteIds = (stopDepartures: Departure[]) => {

        const depSet = [...new Set(stopDepartures.map((ev: any) => ev.serviceJourney.journeyPattern.line.publicCode + '-/-' + ev.destinationDisplay.frontText))]
        const depSetSplit = depSet.map(dep => {
            return dep.split('-/-')
        })
        const uniqueDeps = depSetSplit.map(dep => {
            return {
                lineNr: dep[0],
                frontText: dep[1],
                departureTimes: getDepartureTimes(dep[0], dep[1], stopDepartures)
            }
        })

        return uniqueDeps
    }

    const getTimeToDeparture = (departureTime: string): string => {
        const minutes = 15;

        const formattedDepartureDate = new Date(departureTime)
        const now = new Date()
        const timeToDepartureMins = Math.round((formattedDepartureDate.getTime() - now.getTime()) / (60 * 1000))

        if (timeToDepartureMins === 0) {
            return 'now'
        }
        else if (timeToDepartureMins < minutes) {
            return `${timeToDepartureMins} mins`
        } else {
            return formattedDepartureDate.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' })

        }
    }

    return (
        <RuterWrapper>
            {
                departuresFromStop[0] &&
                stopPlaces.map((stopPlace) => {

                    return <div key={stopPlace.id}>
                        <ListHeader>{stopPlace.name}</ListHeader>
                        {
                            uniqueDepartureRoutes.map((departureRoute, i) => {
                                console.log(uniqueDepartureRoutes)
                                return (
                                    <RowContainer key={departureRoute.lineNr + departureRoute.frontText + i}>
                                        <RowName>
                                            <div>{`${departureRoute.lineNr} ${departureRoute.frontText}`}</div>
                                        </RowName>
                                        <RowData>
                                            {
                                                departureRoute.departureTimes.map((time: { expectedDepartureTime: string }, index:any) =>
                                                        <div key={index}>{getTimeToDeparture(time.expectedDepartureTime)}</div>
                                                    )
                                            }
                                        </RowData>
                                    </RowContainer>)
                            })
                        }
                    </div>
                })
            }
        </RuterWrapper>
    );
};

export default Ruter;
