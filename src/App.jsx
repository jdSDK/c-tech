import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import ResultsPage from "./components/pages/results_page/ResultsPage";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: rgb(231,231,231);
        background-repeat: no-repeat;
        font-family: Inter, sans-serif;
        height: 100%;
        min-width: 1100px;
    }
`;
const Page = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #333;
    font-size: 1.2em;
    line-height: 1.5;
    text-align: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const Container = styled.div`
    padding: ${ props => props.$padding || "1em" };
    width: ${ props => props.$width || "100%" };
    height: fit-content;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const Wrapper = styled.div`
    display: flex;
    gap:20px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width:80%;
    padding: 20px;
    min-width: 1200px;
    @media (max-width: 1550px) {
        width:95%;
    }
`;


const theme = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
};

export { theme, GlobalStyle, Page, Container };


function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={ theme }>
                <ResultsPage />
            </ThemeProvider>
        </>
    );

}
export default App;
