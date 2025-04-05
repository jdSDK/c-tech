import VehicleCard from "../../vehicle_card/VehicleCard";
import styled from "styled-components";
import Loader from "../../../common/Loader";

import { SearchX } from "lucide-react";

const VehicleListing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    padding: 20px;
`;

const NoResultsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 0.5em;
    font-size: 16px;
    color: #aaa;
    padding: 20px;
    height: 400px;
`;

const ResultsArea = ( { vehicles, favouriteToggle, isLoading, handleViewDetail } ) => {
    return (
        isLoading ?
            <NoResultsWrapper>
                <Loader message={ "Getting your Results" } />
            </NoResultsWrapper>
            :
            vehicles.length > 0 ?
                <VehicleListing>
                    {
                        vehicles?.map( ( vehicle, index ) => (
                            <VehicleCard
                                vehicle={ vehicle }
                                index={ index }
                                key={ index }
                                favouriteToggle={ favouriteToggle }
                                handleViewDetail={ handleViewDetail }
                            />
                        ) )
                    }
                </VehicleListing>
                :
                <NoResultsWrapper>
                    < SearchX size={ 50 } color="#aaa" />
                    <span>No vehicles found matching your criteria</span>
                    <span>Adjust your filters</span>
                </NoResultsWrapper>
    );
};
export default ResultsArea;
