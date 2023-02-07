import styled, {css} from 'styled-components'

export const Container = styled.div`
${({theme}) =>css``}
  display: flex;
  flex-direction: column
` 
export const CardGrid = styled.div`
${({theme}) =>css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;



  `}

` 