import React from "react";
import styled from "styled-components";
import car_placeholder from "../../../assets/car_placeholder.png";
import { fadeIn, rightSlide } from "../../common/Animations.styled";
import { X } from "lucide-react";
import { dateToString, getDaysUntilDate, parseCommaDelimitedString } from "../../../lib/Functions";
import { Bookmark } from "lucide-react";
import { useState } from "react";

const ScreenModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 15, 0.5); 
    z-index: 999; 
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    animation: ${({ $isOpen }) => ($isOpen ? fadeIn : "none")} 0.3s ease-in-out; 
`;

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")}; // Slide in/out
    width: 700px;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1000; 
    transition: right 0.3s ease-in-out;
    display: flex;
    border: 1px solid #ddd;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
    animation: ${({ $isOpen }) => ($isOpen ? rightSlide : "none")} 0.3s ease-in-out; 
`;

const SidebarHeader = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding:20px;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
`;

const SidebarTitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;

const SidebarContent = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    font-size: 14px;
`;
const ImageArea = styled.div`
    align-self: center;
    position: relative;
   
    width: 100%;
    height: auto;
    object-fit: cover;
    
    & img{
        width: 100%;
        height: auto;
    }
`;
const FloatingButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    transition: all 0.2s ease, background-color 0.2s ease;
    color: ${(props) => (props.$favourite ? "white" : "#bbb")};
    background-color: ${(props) => (props.$favourite ? "rgb(54, 148, 41)" : "white")};
    
    &:hover {
        border: 1px solid ${(props) => (props.$favourite ? "rgb(69, 175, 55)" : "rgb(53, 140, 255)")};
        background-color: ${(props) => (props.$favourite ? "rgb(69, 175, 55)" : "white")};
        color: ${(props) => (props.$favourite ? "white" : "#46B1C9")};
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px; 
    box-sizing: border-box; 
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
    gap: ${({ gap }) => gap || "0px"}; 
    box-sizing: border-box; 

    & h3 {
    padding-top:20px;
    align-self: flex-start;
        font-size: 18px;
        margin: 0 0 5px 0;
        font-weight: normal;
    }
`;
const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 10px;
    font-size: 14px;
    background: #f9f9f9;
    border-bottom: 1px solid #f1f1f1;
    & strong {
        font-weight: bold;
    }
`;
const DetailChip = styled.div`
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 14px;
    width: fit-content;
    display: flex;
    align-items: flex-start;
    margin-right: 5px;
`;
const Spacer = styled.div`
    width: 100%;
    height: ${({ height }) => height || "20px"};
`;

const DetailViewSidebar = ({
    isOpen,
    onClose,
    vehicle,
    favouriteToggle
}) => {
    const [isFavourite, setIsFavourite] = useState(vehicle?.favourite);
    const handleFavouriteToggle = () => {
        setIsFavourite(!isFavourite);
        favouriteToggle(vehicle);
    };
    if (!vehicle) return null; // Don't render if no vehicle is selected

    return (
        <ScreenModalOverlay $isOpen={isOpen} onClick={onClose}>
            <SidebarContainer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <SidebarHeader>
                    <SidebarTitle>{vehicle.year} {vehicle.make} {vehicle.model}</SidebarTitle>
                    <CloseButton title="Close detail" onClick={onClose}><X /></CloseButton>
                </SidebarHeader>
                <ImageArea>
                    <img src={car_placeholder} alt={`${vehicle.make} ${vehicle.model}`} />
                    <FloatingButton
                        $favourite={vehicle.favourite}
                        onClick={() => handleFavouriteToggle(vehicle)}
                        title="Toggle Favourite"
                    >
                        <Bookmark size={24} strokeWidth={2.5} />
                    </FloatingButton>
                </ImageArea>
                <SidebarContent>


                    {/* Row: 1st Level JSON Properties */}
                    <Row>
                        <Column>
                            <h3>Vehicle Data</h3>
                            <DetailItem><strong>MAKE/MODEL</strong> {vehicle.make} {vehicle.model}</DetailItem>
                            <DetailItem><strong>YEAR</strong> {vehicle.year}</DetailItem>
                            <DetailItem><strong>MILEAGE</strong> {vehicle.mileage} km</DetailItem>
                            <DetailItem><strong>LOCATION</strong> {vehicle.location}</DetailItem>
                            <DetailItem><strong>FUEL</strong> {vehicle.fuel}</DetailItem>
                            <DetailItem><strong>ENGINE SIZE</strong> {vehicle.engineSize}</DetailItem>
                        </Column>
                    </Row>

                    <Row>
                        <Column> {/* Column: Auction Details */}
                            <h3>Auction Details</h3>
                            <DetailItem><strong>Starting Bid</strong> €{parseCommaDelimitedString(vehicle.startingBid)}</DetailItem>
                            <DetailItem><strong>Date</strong> {dateToString(vehicle.auctionDateTime)}</DetailItem>
                            <DetailItem><strong>Ends in</strong> {getDaysUntilDate(vehicle.auctionDateTime)} days</DetailItem>
                            <DetailItem><strong>Reference</strong> {vehicle.reference}</DetailItem>

                        </Column>
                    </Row>


                    {/* Row: Ownership, Equipment, and Specification */}
                    <Row>
                        {/* Column: Ownership and Equipment */}
                        <Column>
                            <Column>
                                <h3>Ownership</h3>
                                <DetailItem><strong>LOG BOOK</strong> {vehicle.ownership.logBook}</DetailItem>
                                <DetailItem><strong>PREV. OWNERS</strong> {vehicle.ownership.numberOfOwners}</DetailItem>
                                <DetailItem><strong>REGISTRATION</strong> {dateToString(vehicle.ownership.dateOfRegistration)}</DetailItem>
                            </Column>
                            <Column>
                                <h3>Equipment</h3>
                                {vehicle.equipment.map((item, index) => (
                                    <DetailChip key={index}>{item}</DetailChip>
                                ))}
                            </Column>
                        </Column>

                        {/* Column: Specification */}
                        <Column>
                            <h3>Specification</h3>
                            <DetailItem><strong>VEHICLE TYPE</strong> {vehicle.specification.vehicleType}</DetailItem>
                            <DetailItem><strong>COLOUR</strong> {vehicle.specification.colour}</DetailItem>
                            <DetailItem><strong>FUEL TYPE</strong> {vehicle.specification.fuel}</DetailItem>
                            <DetailItem><strong>TRANSMISSION</strong> {vehicle.specification.transmission}</DetailItem>
                            <DetailItem><strong>DOORS</strong> {vehicle.specification.numberOfDoors}</DetailItem>
                            <DetailItem><strong>CO2</strong> {vehicle.specification.co2Emissions}</DetailItem>
                            <DetailItem><strong>NOx</strong> {vehicle.specification.noxEmissions}</DetailItem>
                            <DetailItem><strong>KEYS</strong> {vehicle.specification.numberOfKeys}</DetailItem>
                        </Column>
                    </Row>




                    <Row>
                        <Column>
                            <Spacer height={"60px"} />
                            {vehicle.reference}
                        </Column>
                    </Row>

                </SidebarContent>

            </SidebarContainer>
        </ScreenModalOverlay>
    );
};

export default DetailViewSidebar;