import styled from 'styled-components';
import theme from '../../styles/theme'

const nrCols = 10;
const nrRows = 10;


export const PageLayout = styled.div`
height: 100vh;
max-height: 100vh;
background-color: ${theme.colors.black};
display: grid;
grid-gap: 1.5rem;
grid-template-columns: repeat(${nrCols}, 1fr);
grid-template-rows: repeat(${nrRows}, 1fr);
padding: ${theme.spacing[3]};
`
