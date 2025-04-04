import { useState, useEffect } from "react"
import Vehicle from "../../models/Vehicle";
import jsonVehicleData from '../../dataset/vehicles_dataset_with_location.json';
import { randint } from "../../lib/Functions";
import { Page, Container } from "../../App"
import SearchResultsArea from "./search_page/SearchResultsArea";
import SearchFilterArea from "./search_page/SearchFilterArea";
import SearchFilterQuickArea from "./search_page/SearchFilterQuickArea";
import SearchResultsPaginationUpperSection from "./search_page/SearchResultsPaginationUpperSection";
import SearchResultPaginationSection from "./search_page/SearchResultsPaginationLowerSection";
import Loader from "../common/Loader";

const ResultsPage = () => {
    const [vehiclesDB, setVehiclesDB] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [resultsPerPage, setResultsPerPage] = useState(4)
    const [queryParams, setQueryParams] = useState({
        "filter": {
            "make": null,
            "model": null,
            "startingBid_range_start": null,
            "startingBid_range_end": null,
            "favourite": null,
        },
        "sort": {
            "sortBy": null,
            "ascending": null,
        },
        "pagination": {
            "page": 1,
            "perPage": resultsPerPage,
        }
    })
    const [isPageLoading, setIsPageLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [metadata, setMetadata] = useState({})
    const ARTIFICIAL_LOADING_TIME = randint(250, 1500);


    useEffect(() => {
        /*
        Initial load into state for the vehiclesDB
        */
        const loadVehicleDB = async () => {
            setVehiclesDB(jsonVehicleData);
            setIsPageLoading(false);
        }
        loadVehicleDB();
    }, []);


    useEffect(() => {
        /*
        Load the vehicles with the query params
        */
        const loadVehiclesWithQueryParams = async () => {
            setIsLoading(true);
            setTimeout(() => {
                let { vehicles: vehiclesQuery, metadata } = Vehicle.get(vehiclesDB, queryParams);
                setMetadata(metadata);
                setVehicles(vehiclesQuery);
                setIsLoading(false);
            }, ARTIFICIAL_LOADING_TIME);
        }
        if (vehiclesDB.length > 0) {
            loadVehiclesWithQueryParams();
        }
    }, [queryParams, vehiclesDB, resultsPerPage]);

    const handleResultsPerPageChange = (newResultsPerPage) => {
        // Necessary to reload params after perPage change
        setResultsPerPage(newResultsPerPage);
        setQueryParams({
            ...queryParams,
            pagination: {
                ...queryParams.pagination,
                perPage: newResultsPerPage,
            }
        })
    }


    if (isPageLoading) {
        return <div>Loading...</div>
    }
    return (
        <Page>
            <Container>
                <SearchFilterArea
                    queryParams={queryParams}
                    setQueryParams={setQueryParams}
                />
                <SearchFilterQuickArea
                    queryParams={queryParams}
                    setQueryParams={setQueryParams}
                    setResultsPerPage={handleResultsPerPageChange}
                />
                <SearchResultsPaginationUpperSection
                    metadata={metadata}
                    resultsPerPage={resultsPerPage}
                    setResultsPerPage={handleResultsPerPageChange}
                />

                {
                    isLoading ?
                        <Loader message={"Getting your Results"} />
                        :
                        <SearchResultsArea
                            vehicles={vehicles}
                        />
                }


                <SearchResultPaginationSection
                    queryParams={queryParams}
                    metadata={metadata}
                    setQueryParams={setQueryParams}
                    setResultsPerPage={handleResultsPerPageChange}
                />

            </Container>
        </Page>
    )
}

export default ResultsPage;