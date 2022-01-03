import styled from 'styled-components';

export const RuterWrapper = styled.div`
grid-column-start: 1;
grid-column-end: 5;
grid-row-start: 5;
grid-row-end: -1;
text-align: left;

border: 1px solid red;
height: 100%;
overflow: hidden;
`
export const RowContainer = styled.div`
display: grid;
grid-template-columns: 2fr 3fr;
`
export const RowName = styled.div`
display: flex;
`
export const RowData = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
text-align: center;
`