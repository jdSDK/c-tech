import VehicleCard from "../vehicle_card/VehicleCard";
import Loader from "../../../common/Loader";

import { SearchX } from "lucide-react";

import * as Styled from './ResultsArea.styled';


const ResultsArea = ( { vehicles, favouriteToggle, isLoading, handleViewDetail } ) => {
    return (
        isLoading ?
            <Styled.NoResultsWrapper>
                <Loader message={ "Getting your Results" } />
            </Styled.NoResultsWrapper>
            :
            vehicles.length > 0 ?
                <Styled.VehicleListing>
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
                </Styled.VehicleListing>
                :
                <Styled.NoResultsWrapper>
                    < SearchX size={ 50 } color="#aaa" />
                    <span>No vehicles found matching your criteria</span>
                    <span>Adjust your filters</span>
                </Styled.NoResultsWrapper>
    );
};
export default ResultsArea;
