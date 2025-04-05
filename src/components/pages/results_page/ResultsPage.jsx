import { useState, useEffect } from "react";

import jsonVehicleData from '../../../dataset/vehicles_dataset_with_location_and_date.json';
import { randint } from "../../../lib/Functions";
import { Page, Container, Wrapper } from "../../../App";

import Vehicle from "../../../models/Vehicle";

import ResultsArea from "./results_area/ResultsArea";
import FilterArea from "./results_area/filter_area/FilterArea";
import FilterChipsSection from "./results_area/filter_chips_section/FilterChipsSection";
import UpperPaginationBar from "./results_area/upper_pagination_bar/UpperPaginationBar";
import LowerPaginationBar from "./results_area/lower_pagination_bar/LowerPaginationBar";

import DetailViewSidebar from "../detail_sidebar/Sidebar";

const ResultsPage = () => {
    const [ vehiclesDB, setVehiclesDB ] = useState( [] );
    const [ vehicles, setVehicles ] = useState( [] );
    const [ resultsPerPage, setResultsPerPage ] = useState( 4 );
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ queryParams, setQueryParams ] = useState( {
        "filter": {
            "make": null,
            "model": null,
            "favourite": null,
        },
        "rangeFilter": {
            "startingBid": {
                "min": null,
                "max": null,
            },
            "mileage": {
                "min": null,
                "max": null,
            },
            "year": {
                "min": null,
                "max": null,
            },
        },
        "sort": {
            "sortBy": null,
            "ascending": true,
        },
        "pagination": {
            "page": currentPage,
            "perPage": resultsPerPage,
        }
    } );
    const [ isPageLoading, setIsPageLoading ] = useState( true );
    const [ isLoading, setIsLoading ] = useState( true );
    const [ metadata, setMetadata ] = useState( {} );

    const [ isSidebarOpen, setIsSidebarOpen ] = useState( false );
    const [ selectedVehicle, setSelectedVehicle ] = useState( null );

    const ARTIFICIAL_LOADING_TIME = randint( 250, 1500 );


    useEffect( () => {
        /*
        Initial load into state for the vehiclesDB
        */
        const loadVehicleDB = async () => {
            setVehiclesDB( jsonVehicleData );
            setIsPageLoading( false );
        };
        loadVehicleDB();
    }, [] );


    useEffect( () => {
        /*
        Load the vehicles with the query params
        */
        const loadVehiclesWithQueryParams = async () => {
            setIsLoading( true );
            setTimeout( () => {
                let { vehicles: vehiclesQuery, metadata } = Vehicle.get( vehiclesDB, queryParams );
                setMetadata( metadata );
                setVehicles( vehiclesQuery );
                setIsLoading( false );
            }, ARTIFICIAL_LOADING_TIME );
        };
        if ( vehiclesDB.length > 0 ) {
            loadVehiclesWithQueryParams();
        }
    }, [ queryParams, vehiclesDB, resultsPerPage ] );

    const handleResultsPerPageChange = ( newResultsPerPage ) => {
        // Necessary to reload params after perPage change
        setResultsPerPage( newResultsPerPage );
        setQueryParams( {
            ...queryParams,
            pagination: {
                ...queryParams.pagination,
                perPage: newResultsPerPage,
            }
        } );
    };
    const handleCurrentPageChange = ( newPage ) => {
        setCurrentPage( newPage );
        setQueryParams( {
            ...queryParams,
            pagination: {
                ...queryParams.pagination,
                page: newPage,
            }
        } );
    };
    const handleQueryParamsChange = ( newQueryParams ) => {
        // Update the query params and reset the page to 1
        setQueryParams( newQueryParams );
    };
    const handleViewDetail = ( vehicle ) => {
        setSelectedVehicle( vehicle );
        setIsSidebarOpen( true );
    };
    const handleCloseSidebar = () => {
        setIsSidebarOpen( false ); // Close the sidebar
        setSelectedVehicle( null ); // Clear the selected vehicle
    };


    const handleFavouriteToggle = ( vehicle ) => {
        // Toggle the favourite status of the vehicle
        vehicle.favourite = !vehicle.favourite;
        // Find the vehicle in vehiclesDB and update it - no state change needed here
        const vehicleIndex = vehiclesDB.findIndex( v => v.reference === vehicle.reference );
        if ( vehicleIndex !== -1 ) {
            vehiclesDB[ vehicleIndex ].favourite = vehicle.favourite;
        }
        // Vehicle.patch(path, vehicle) -> this is what I'd do in a real API call here
    };

    if ( isPageLoading ) {
        return <div>Loading...</div>;
    }

    return (
        <Page>
            <Wrapper>
                <Container width="20%" padding="0">
                    <FilterArea
                        queryParams={ queryParams }
                        setQueryParams={ handleQueryParamsChange }
                    />
                </Container>
                <Container>
                    <UpperPaginationBar
                        metadata={ metadata }
                        resultsPerPage={ resultsPerPage }
                        setResultsPerPage={ handleResultsPerPageChange }
                    />
                    <FilterChipsSection
                        queryParams={ queryParams }
                        setQueryParams={ handleQueryParamsChange }
                    />
                    <ResultsArea
                        vehicles={ vehicles }
                        favouriteToggle={ handleFavouriteToggle }
                        isLoading={ isLoading }
                        handleViewDetail={ handleViewDetail }
                    />
                    <LowerPaginationBar
                        metadata={ metadata }
                        queryParams={ queryParams }
                        currentPage={ currentPage }
                        handlePageChange={ handleCurrentPageChange }
                    />
                </Container>
            </Wrapper>

            <DetailViewSidebar
                isOpen={ isSidebarOpen }
                onClose={ handleCloseSidebar }
                vehicle={ selectedVehicle }
                favouriteToggle={ handleFavouriteToggle }
            />
        </Page>
    );
};

export default ResultsPage;

