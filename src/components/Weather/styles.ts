import styled from 'styled-components';
import theme from '../../styles/theme';

export const WeatherWrapper = styled.div`
grid-column-start: 7;
grid-column-end: -1;
grid-row: span 2;

`
export const TempAndIconWrapper = styled.div`
display: flex;
justify-content: flex-end;
gap: 1rem;
svg {
    max-width: 10rem;
    width: 100%;
}
`

type ArrowContainerProps = {
    angle: number;
};

export const ArrowContainer = styled.span<ArrowContainerProps>`
padding-left: ${theme.spacing[3]};

i {
    transform: ${(props) => (`rotateZ(${props.angle}deg)`)};
    }
`;
