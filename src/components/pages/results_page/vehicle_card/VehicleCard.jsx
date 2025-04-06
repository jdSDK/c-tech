import VehicleCardDetails from "./details/VehicleCardDetails";
import VehicleAuctionDetails from "./auction_details/VehicleAuctionDetails";
import Header from "./header/Header";
import VehicleCardFooter from "./footer/VehicleCardFooter";
import * as Styled from "./VehicleCard.styled";
import ImagePlaceholder from "../../../common/placeholder_image/PlaceholderImage";
import { useState } from "react";



const CardImageComponent = ( { src, alt, } ) => {
    const [ imageStatus, setImageStatus ] = useState( "loading" );
    const handleLoad = () => setImageStatus( "loaded" );
    const handleError = () => setImageStatus( "error" );
    return (
        !src ?
            <Styled.PlaceholderContainer>
                <ImagePlaceholder />
            </Styled.PlaceholderContainer>
            :
            <Styled.ImageContainer>
                { imageStatus === "loading" && (
                    <Styled.Loader aria-label="Loading Image">Loading...</Styled.Loader>
                )
                }
                { imageStatus === "error" && <ImagePlaceholder /> }
                { imageStatus === "loaded" && (
                    <Styled.CardImage
                        src={ src }
                        alt={ alt }
                        onLoad={ handleLoad }
                        onError={ handleError }
                    />
                )
                }
                { imageStatus === "loading" && (
                    <Styled.CardImage
                        src={ src }
                        alt={ alt }
                        onLoad={ handleLoad }
                        onError={ handleError }
                        style={ { display: "none" } } // Preload the image while showing the loader
                    />
                )
                }
            </Styled.ImageContainer>
    );

};



const VehicleCard = ( { vehicle, index, favouriteToggle, handleViewDetail } ) => {

    return (
        <Styled.Card $index={ index } aria-label="Vehicle Card">
            <CardImageComponent src={ vehicle.image } alt="Vehicle Image" />
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