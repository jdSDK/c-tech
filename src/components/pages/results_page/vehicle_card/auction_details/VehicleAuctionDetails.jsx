
import {
    AuctionDetailsWrapper,
    AuctionDate,
    Label,
    AuctionDateValue,
    AuctionDaysLeft,
} from "./VehicleAuctionDetails.styled";
import { dateToString, getDaysUntilDate } from '../../../../../lib/Functions';
import { Clock, ClockAlert } from "lucide-react";

const VehicleAuctionDetails = ( { vehicle } ) => {
    const auctionDate = vehicle?.auctionDateTime;
    const daysLeft = getDaysUntilDate( auctionDate );

    return (
        <AuctionDetailsWrapper>
            <AuctionDate>
                <Label>
                    Auction Date
                </Label>
                <AuctionDateValue>
                    { dateToString( auctionDate ) }
                </AuctionDateValue>

            </AuctionDate>

            <AuctionDaysLeft $urgent={ daysLeft < 7 }>
                { daysLeft } day{ daysLeft == 1 ? "" : "s" } left
                {
                    daysLeft < 7 ?
                        < ClockAlert color="red" size={ 16 } /> :
                        < Clock color="green" size={ 16 } />
                }
            </AuctionDaysLeft>

        </AuctionDetailsWrapper>
    );
};

export default VehicleAuctionDetails;