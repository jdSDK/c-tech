import {
    CardHeader,
    CardHeaderVehicleInfo,
    CardHeaderYear,
    CardHeaderTitle,
    CardHeaderEngineSize,
    CardHeaderPrice,
    CardHeaderPriceLabel
} from "./VehicleCardHeader.styled";
import { parseCommaDelimitedString } from '../../../lib/Functions';
const VehicleCardHeader = ({ vehicle }) => {

    return (
        <CardHeader>
            <CardHeaderVehicleInfo>

                <CardHeaderTitle>{vehicle.make} {vehicle.model}</CardHeaderTitle>
                <CardHeaderEngineSize>{vehicle.engineSize}</CardHeaderEngineSize>
                <CardHeaderYear>({vehicle.year})</CardHeaderYear>
            </CardHeaderVehicleInfo>
            <CardHeaderPrice>

                <CardHeaderPriceLabel>Starting at </CardHeaderPriceLabel> €{parseCommaDelimitedString(vehicle.startingBid)}

            </CardHeaderPrice>
        </CardHeader>
    );
};

export default VehicleCardHeader;
