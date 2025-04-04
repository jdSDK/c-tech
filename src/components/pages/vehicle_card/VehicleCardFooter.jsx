import { CardFooter, CardFooterActions, CardFooterContextInfo, CardFooterContextInfoIconWrapper, CardDetailButton, CardFavouriteButton } from "./VehicleCardFooter.styled";
import { Bookmark, Eye, MapPinCheckInside } from 'lucide-react';

const VehicleCardFooter = ({ vehicle }) => {
    return (
        <CardFooter>
            <CardFooterContextInfo>
                <CardFooterContextInfoIconWrapper>
                    <MapPinCheckInside size={16} strokeWidth={2.75} />
                </CardFooterContextInfoIconWrapper>
                {vehicle.location}
            </CardFooterContextInfo>
            <CardFooterActions>
                <CardFavouriteButton
                    $favourite={vehicle.favourite}
                    title={vehicle.favourite ? "Remove from favourites" : "Favourite"}>
                    <Bookmark size={16} strokeWidth={2.75} />
                    {vehicle.favourite ? "Saved" : "Save"}
                </CardFavouriteButton>
                <CardDetailButton>
                    <Eye size={16} strokeWidth={2.75} />
                    View Offer
                </CardDetailButton>

            </CardFooterActions>
        </CardFooter>
    );
}

export default VehicleCardFooter;
