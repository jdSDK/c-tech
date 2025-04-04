import car_placeholder from "../../../assets/car_placeholder.png"
import VehicleCardDetails from "./VehicleCardDetails";
import VehicleAuctionDetails from "./VehicleAuctionDetails";
import VehicleCardHeader from "./VehicleCardHeader";
import VehicleCardFooter from "./VehicleCardFooter";
import {
    Card,
    CardImage,
    CardContents,
    CardDetails
} from "./VehicleCard.styled";

const VehicleCard = ({ vehicle, index }) => {
    return (
        <Card $index={index}>
            <CardImage src={car_placeholder} />
            <CardContents>
                <VehicleCardHeader vehicle={vehicle} />
                <CardDetails>
                    <VehicleCardDetails vehicle={vehicle} />
                    <VehicleAuctionDetails vehicle={vehicle} />
                </CardDetails>
                <VehicleCardFooter vehicle={vehicle} />
            </CardContents>
        </Card>
    )
}

export default VehicleCard;