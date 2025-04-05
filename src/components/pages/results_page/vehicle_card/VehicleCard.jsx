import VehicleCardDetails from "./details/VehicleCardDetails";
import VehicleAuctionDetails from "./auction_details/VehicleAuctionDetails";
import Header from "./header/Header";
import VehicleCardFooter from "./footer/VehicleCardFooter";
import * as Styled from "./VehicleCard.styled";
import { Image } from "lucide-react";
import styled from "styled-components";
import { useState } from "react";

const PlaceholderBackground = styled.div`
    background-color:rgb(213, 213, 213);
    height: 170px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    svg {
        width: 50px;
        height: 50px;
        color: rgb(169, 169, 169)
    }
`;

const CardImageComponent = ( { src, alt, } ) => {
    const [ imageStatus, setImageStatus ] = useState( "loading" );
    const handleLoad = () => setImageStatus( "loaded" );
    const handleError = () => setImageStatus( "error" );
    return (
        !src ?

            <ImagePlaceholder />
            :
            <Styled.ImageContainer>

                { imageStatus === "loading" && (
                    <Styled.Loader aria-label="Loading Image">Loading...</Styled.Loader>
                ) }
                { imageStatus === "error" && <ImagePlaceholder /> }
                { imageStatus === "loaded" && (
                    <Styled.CardImage
                        src={ src }
                        alt={ alt }
                        onLoad={ handleLoad }
                        onError={ handleError }
                    />
                ) }
                { imageStatus === "loading" && (
                    <Styled.CardImage
                        src={ src }
                        alt={ alt }
                        onLoad={ handleLoad }
                        onError={ handleError }
                        style={ { display: "none" } } // Preload the image while showing the loader
                    />
                ) }
            </Styled.ImageContainer>
    );

};

const ImagePlaceholder = () => {
    return (
        <PlaceholderBackground title="No Image Available" aria-label="Image Placeholder">
            <Image />
        </PlaceholderBackground>
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