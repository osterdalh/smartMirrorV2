import styled from 'styled-components';
import theme from '../../styles/theme'


const nrCols = 10;
const nrRows = 10;



export const PageLayoutContainer = styled.div`
height: 100vh;

.react-grid-layout{
    height: 100% !important;
}
    
.react-grid-item.react-grid-placeholder{
    background: ${theme.colors.white};
}
`
