import styled,{css} from 'styled-components'

const color = {
    border: "#104d7c",
    error: "#bb2929"
}


export const Select = styled.select`
     background-color: rgba(205, 205, 206, 0.0);
     border: none;
     border-bottom: solid 1px #535353;
     margin-bottom: 20px;
     font-size: 19px;
     padding: 10px;
     padding-right: 40px;
     outline: 0 none;
     width: 98%;
     transition-duration: 0.3s;

     &:focus {
          border-bottom: solid 1px ${color.border};
          outline: 0 none;/*Quita el borde del formulario cuando damos clic*/
	}

     ${props => props.validUser === 'true' && css`
          border-bottom: solid 1px ${color.border} !important;
	`}

	${props => props.validUser === 'false' && css`
          border-bottom: solid 1px ${color.error} !important;
	`}
`;
