import { Car } from 'lucide-react';
import * as Styled from './SiteHeader.styled';

const SiteHeader = () => {
    return (
        <Styled.Header style={ { "pointerEvents": "none", "userSelect": "none" } }>
            <Styled.HeaderWrapper>

                <Styled.TitleContainer>

                    <Car size={ 45 } color="rgb(89, 157, 229)" />
                    <Styled.Title>
                        PTCarBuy
                    </Styled.Title>
                    <Styled.Subtitle>
                        Portugal's Fakest Automarket
                    </Styled.Subtitle>

                </Styled.TitleContainer>

                <Styled.Nav>
                    <ul>

                    </ul>
                </Styled.Nav>

            </Styled.HeaderWrapper>

        </Styled.Header>
    );
};

export default SiteHeader;