import {
    DetailsWrapper,
    DetailsColumn,
    FuelIconWrapper,
    DetailText,
    DetailLine,
    GenericIconWrapper,
    DetailEquipmentChip,
} from './VehicleCardDetails.styled';
import { Fuel, Gauge, Users, User, PackagePlus, PackageX, GitGraph } from 'lucide-react';
import { parseCommaDelimitedString } from '../../../../../lib/Functions';

const VehicleCardDetails = ( { vehicle } ) => {
    const fuel = vehicle.fuel;
    const n_owners = vehicle?.ownership?.numberOfOwners ?? 0;
    const equipment = vehicle?.equipment ?? [];
    const transmission = vehicle?.specification?.transmission ?? null;
    return (
        <DetailsWrapper>
            <DetailsColumn>
                <DetailLine>
                    <GenericIconWrapper title="Kilometrage">
                        <Gauge />
                    </GenericIconWrapper>
                    <DetailText>{ parseCommaDelimitedString( vehicle.mileage ) } km</DetailText>
                </DetailLine>
                <DetailLine>
                    <GenericIconWrapper title="Transmission">
                        <GitGraph />
                    </GenericIconWrapper>
                    <DetailText>{ transmission }</DetailText>
                </DetailLine>
                <DetailLine>
                    <FuelIconWrapper $fuel={ fuel } title="Fuel Type">
                        <Fuel strokeWidth={ 2 } />
                    </FuelIconWrapper>
                    <DetailText>{ vehicle.fuel }</DetailText>
                </DetailLine>

            </DetailsColumn>
            <DetailsColumn>
                <DetailLine>
                    <GenericIconWrapper title="Number of owners">
                        {
                            n_owners > 1 ?
                                <Users />
                                :
                                <User />
                        }
                    </GenericIconWrapper>
                    <DetailText>{ n_owners } owners</DetailText>
                </DetailLine>
                <DetailLine>
                    <GenericIconWrapper title="Equipment">
                        {
                            equipment.length > 0 ?
                                <PackagePlus />
                                :
                                <PackageX />
                        }
                    </GenericIconWrapper>
                    <DetailText>
                        {
                            equipment.length > 0 ?
                                <>
                                    {
                                        equipment.slice( 0, 1 ).map( ( item, index ) => (
                                            <DetailEquipmentChip key={ index }>
                                                { item }
                                            </DetailEquipmentChip>
                                        ) )
                                    }
                                    {
                                        equipment.length > 1 ?
                                            <DetailEquipmentChip>
                                                +{ equipment.length - 1 }
                                            </DetailEquipmentChip>
                                            :
                                            ""
                                    }
                                </>
                                :
                                "Base Model"
                        }
                    </DetailText>
                </DetailLine>
            </DetailsColumn>
        </DetailsWrapper>
    );
};


export default VehicleCardDetails;