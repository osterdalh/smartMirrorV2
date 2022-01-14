import styled from 'styled-components';
import theme from '../../styles/theme';

export const ModalContainer = styled.div`
    color: ${theme.colors.black};

    i {
        color:${theme.colors.lightBlack};
        font-size:${theme.spacing[4]};
        position: absolute;
        right: 0; 
        top: 0;
        margin: ${theme.spacing[3]};
        z-index: 10;
        cursor: pointer;
        &:hover{
            color:${theme.colors.white};
        }
    }
`