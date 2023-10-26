import styled from 'styled-components';

type EventRowProps = {
    daysToEvent: number;
};


export const EventRow = styled.div<EventRowProps>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-transform: capitalize;
    font-size: ${({ daysToEvent }) => {
        if (daysToEvent === 0) {
            return '1.5rem'
        }
        else if (daysToEvent === 1) {
            return '1rem'
        }
        else return 'initial'
    }};
`


