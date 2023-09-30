import styled from 'styled-components';
import theme from '../../styles/theme';

export const WeatherWrapper = styled.div`
grid-column-start: 7;
grid-column-end: -1;
grid-row: span 2;
height:100%;

`
export const TempAndIconWrapper = styled.div`
display: flex;
gap: 1rem;
font-size: 5rem;

`
interface WindAndSunProps {
    windAngle: number;

}
export const WindAndSun = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
font-size: 1.5rem;

`
export const WindContainer = styled.div<WindAndSunProps>`

svg {
    transform: rotate(${(WindAndSunProps) => 180 + WindAndSunProps.windAngle}deg);
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
