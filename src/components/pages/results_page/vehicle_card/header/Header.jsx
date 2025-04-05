import * as Styled from "./Header.styled";
import { parseCommaDelimitedString } from '../../../../../lib/Functions';

const Header = ( { vehicle } ) => {
    return (
        <Styled.CardHeader>
            <Styled.CardHeaderVehicleInfo>
                <Styled.CardHeaderTitle>
                    { vehicle.make } { vehicle.model }
                </Styled.CardHeaderTitle>
                <Styled.CardHeaderEngineSize>
                    { vehicle.engineSize }
                </Styled.CardHeaderEngineSize>
                <Styled.CardHeaderYear>
                    ({ vehicle.year })
                </Styled.CardHeaderYear>
            </Styled.CardHeaderVehicleInfo>

            <Styled.CardHeaderPrice>
                <Styled.CardHeaderPriceLabel>
                    Starting at
                </Styled.CardHeaderPriceLabel>
                €{ parseCommaDelimitedString( vehicle.startingBid ) }
            </Styled.CardHeaderPrice>
        </Styled.CardHeader>
    );
};

export default Header;
