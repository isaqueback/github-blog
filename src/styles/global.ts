import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --title-l: 1.5rem;
        --title-m: 1.25rem;
        --title-s: 1.125rem;
        
        --text-m: 1rem;
        --text-s: 0.875rem;
        
        --link: 0.75rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme['gray-900']};

    }

    html, body, input, button, textarea {
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    @media (max-width: 670px) {
        html {
            font-size: 20px;
        }
    }
`
