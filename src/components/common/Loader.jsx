import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`

    0% {
        opacity: 0;
        transform: scale3d(0.25, 0.25, 0.25);
    }

    40% {
        transform: scale3d(1.125, 1.125, 1.125);
    }


    100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }


}
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  min-height: 200px; // Adjust as needed
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
    font-size: 16px;
    color: #666;
    margin: 0;
    animation: ${bounce} 1s ease;
    animation-iteration-count: 1
    text-align: center;
`;


const Loader = ({ message }) => {
    return (
        <LoaderWrapper>
            <Spinner />
            {
                message ? <LoadingText>{message}</LoadingText> : <></>
            }
        </LoaderWrapper>
    );
};

export default Loader;