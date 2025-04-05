import styled from "styled-components";


export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
`;
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:85%;
    margin: 0 auto;
    padding: 0 30px;

    @media (max-width: 1550px) {
        width: 100%;
    }
`;
export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
`;
export const Subtitle = styled.h2`
    font-size: 11px;
    width: 120px;
    text-align: left;
    color: #666;
    line-height: 1.2;
    font-weight: 300;
`;
export const TitleContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
`;
export const Nav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        padding: 0;
        margin: 0;
    }

    li {
        cursor: pointer;
        font-size: 1rem;
        color:rgb(32, 133, 241);
        transition: all 0.3s ease-in-out;

        &:hover {
            text-decoration: underline;
        }
    }
`;