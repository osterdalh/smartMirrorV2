import styled from 'styled-components';

type EventRowProps = {
    daysToEvent: number;
};


export const EventRow = styled.div<EventRowProps>`
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    font-size: ${({ daysToEvent }) => {
        if (daysToEvent === 0 ){
            return '2rem'
        }
        else if(daysToEvent === 1){
            return '1.5rem'
        }
        else return 'initial'
    } };
`


