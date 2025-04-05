import car_placeholder from "../../../../assets/car_placeholder.png";
import VehicleCardDetails from "./details/VehicleCardDetails";
import VehicleAuctionDetails from "./auction_details/VehicleAuctionDetails";
import Header from "./header/Header";
import VehicleCardFooter from "./footer/VehicleCardFooter";
import * as Styled from "./VehicleCard.styled";

const VehicleCard = ( { vehicle, index, favouriteToggle, handleViewDetail } ) => {
    return (
        <Styled.Card $index={ index } aria-label="Vehicle Card">
            <Styled.CardImage src={ car_placeholder } />
            <Styled.CardContents>
                <Header vehicle={ vehicle } />
                <Styled.DetailSection>
                    <VehicleCardDetails vehicle={ vehicle } />
                    <VehicleAuctionDetails vehicle={ vehicle } />
                </Styled.DetailSection>
                <VehicleCardFooter
                    vehicle={ vehicle }
                    favouriteToggle={ favouriteToggle }
                    handleViewDetail={ handleViewDetail }
                />
            </Styled.CardContents>
        </Styled.Card>
    );
};

export default VehicleCard;