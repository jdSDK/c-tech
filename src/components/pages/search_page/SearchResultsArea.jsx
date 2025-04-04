import VehicleCard from "../vehicle_card/VehicleCard";
import styled from "styled-components";

const VehicleListing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1em;
    padding: 20px;
    min-height: ${props => props.$height}px;
`;

const SearchResultsArea = ({ vehicles }) => {
    return (
        <VehicleListing>
            {
                vehicles?.map((vehicle, index) => (
                    <VehicleCard vehicle={vehicle} index={index} key={index} />
                ))
            }
        </VehicleListing>
    )
}
export default SearchResultsArea;
