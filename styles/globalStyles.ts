import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		font-size: 10px;
	}
	html, body, #__next {
		height: 100%;
	}
`;

export { GlobalStyle };
