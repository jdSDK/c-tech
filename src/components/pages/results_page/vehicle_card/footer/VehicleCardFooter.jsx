import { CardFooter, CardFooterActions, CardFooterContextInfo, CardFooterContextInfoIconWrapper, CardDetailButton, CardFavouriteButton } from "./VehicleCardFooter.styled";
import { Bookmark, Eye, MapPinCheckInside } from 'lucide-react';
import { useState } from "react";
const VehicleCardFooter = ( { vehicle, favouriteToggle, handleViewDetail } ) => {

    const [ isFavourite, setIsFavourite ] = useState( vehicle.favourite );
    const handleFavouriteToggle = () => {
        setIsFavourite( !isFavourite );
        favouriteToggle( vehicle );
    };
    return (
        <CardFooter>
            <CardFooterContextInfo>
                <CardFooterContextInfoIconWrapper>
                    <MapPinCheckInside size={ 16 } strokeWidth={ 2.75 } />
                </CardFooterContextInfoIconWrapper>
                { vehicle.location }
            </CardFooterContextInfo>
            <CardFooterActions>
                <CardFavouriteButton
                    $favourite={ vehicle.favourite }
                    onClick={ handleFavouriteToggle }
                    title={ vehicle.favourite ? "Remove from favourites" : "Favourite" }>

                    <Bookmark size={ 16 } strokeWidth={ 2.75 } />
                    { vehicle.favourite ? "Saved" : "Save" }
                </CardFavouriteButton>
                <CardDetailButton onClick={ () => handleViewDetail( vehicle ) }>
                    <Eye size={ 16 } strokeWidth={ 2.75 } />
                    View Offer
                </CardDetailButton>
            </CardFooterActions>
        </CardFooter>
    );
};

export default VehicleCardFooter;
