import car_placeholder from "../../../assets/car_placeholder.png"
import VehicleCardDetails from "./VehicleCardDetails";
import VehicleAuctionDetails from "./VehicleAuctionDetails";
import Header from "./Header";
import VehicleCardFooter from "./VehicleCardFooter";
import * as Styled from "./VehicleCard.styled";

const VehicleCard = ({ vehicle, index, favouriteToggle, handleViewDetail }) => {
    return (
        <Styled.Card $index={index}>
            <Styled.CardImage src={car_placeholder} />
            <Styled.CardContents>
                <Header vehicle={vehicle} />
                <Styled.DetailSection>
                    <VehicleCardDetails vehicle={vehicle} />
                    <VehicleAuctionDetails vehicle={vehicle} />
                </Styled.DetailSection>
                <VehicleCardFooter
                    vehicle={vehicle}
                    favouriteToggle={favouriteToggle}
                    handleViewDetail={handleViewDetail}
                />
            </Styled.CardContents>
        </Styled.Card>
    )
}

export default VehicleCard;