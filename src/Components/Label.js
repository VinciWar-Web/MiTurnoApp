import styled,{css} from 'styled-components'

const color = {
    border: "#104d7c",
    error: "#bb2929"
}


export const LabelLogin = styled.label`
     color: #5e5e5e;
     padding-top: 15px;
     font-family: Arial, Helvetica, sans-serif;
     transition: all 0.5s;

     ${props => props.validUser === 'true' && css`
          color: ${color.border} !important;
	`}

	${props => props.validUser === 'false' && css`
          color: ${color.error} !important;
	`}

`;