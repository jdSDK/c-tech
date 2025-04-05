/*
docs go here
*/
class Vehicle {
    constructor( {
        reference,
        make,
        model,
        engineSize,
        fuel,
        year,
        mileage,
        auctionDateTime,
        startingBid,
        favourite,
        location,
        details = {},
    } ) {
        this.reference = reference;
        this.make = make;
        this.model = model;
        this.engineSize = engineSize;
        this.fuel = fuel;
        this.year = year;
        this.mileage = mileage;
        this.auctionDateTime = auctionDateTime;
        this.startingBid = startingBid;
        this.favourite = favourite;
        this.location = location;

        // "details" gets deconstructed into these properties for easier handling
        this.specification = details.specification ?? {};
        this.ownership = details.ownership ?? {};
        this.equipment = details.equipment ?? [];
    }

    static API_KEYWORDS = {
        reference: "reference",
        make: "make",
        model: "model",
        engineSize: "engineSize",
        fuel: "fuel",
        year: "year",
        mileage: "mileage",
        auctionDateTime: "auctionDateTime",
        startingBid: "startingBid",
        favourite: "favourite",
        details: "details",
        location: "location",
    };

    static KEYWORD_FILTER_LABELS = {
        make: "Make",
        model: "Model",
        engineSize: "Engine Size",
        fuel: "Fuel",
        year: "Year",
        mileage: "Mileage",
        auctionDateTime: "Auction Date",
        startingBid: "Starting Bid",
        favourite: "Favourites",
        location: "Location",
    };

    static MAKE_MODEL_SETS = { // I'd populate this from an endpoint in a real world scenario
        "Toyota": [ "Corolla", "C- HR" ],
        "Ford": [ "Focus", "Fiesta", "Focus C-Max", "Escort" ],
        "Volkswagen": [ "Polo", "Passat", "Golf", "Scirocco", "Tiguan" ],
        "Audi": [ "A3", "A4", "A6" ],
        "Volvo": [ "C40", "C30", "V40" ],
        "Citroen": [ "C3 Aircross", "C5 Aircross", "C3 Origin", "Cactus" ],
        "BMW": [ "3 Series", "1 Series", "5-Series", "X1" ],
        "Mercedes-Benz": [ "A-Class Hatchback", "B-Class", "A-Class Saloon", "E-Class Saloon" ],
    };

    static getSampleVehicle = () => {
        return {
            "make": "SAMPLE",
            "model": "CAR",
            "engineSize": "1.8L",
            "fuel": "petrol",
            "year": 2020,
            "mileage": 16623,
            "auctionDateTime": "2025/04/19 12:28:23",
            "startingBid": 16200,
            "favourite": false,
            "details": {
                "ownership": {
                    "logBook": "Not Present",
                    "numberOfOwners": 5,
                    "dateOfRegistration": "2019/08/13 00:00:00"
                },
                "specification": {
                    "vehicleType": "Car",
                    "colour": "BLACK",
                    "fuel": "petrol",
                    "transmission": "Manual",
                    "numberOfDoors": 3,
                    "co2Emissions": "172 g/km",
                    "noxEmissions": 240,
                    "numberOfKeys": 3
                },
                "equipment": [
                    "Parking Sensors",
                    "Navigation System",
                    "Leather Seats",
                    "17'' Alloy Wheels",
                    "Rear Camera",
                    "Heated Seats",
                    "Tyre Inflation Kit"
                ]
            },
            "location": "Uppsala, Sweden",
            "reference": "SAMPLE"
        };
    };

    static getSampleVehicles = ( n ) => {
        const vehicles = [];
        for ( let i = 0; i < n; i++ ) {
            vehicles.push( Vehicle.getSampleVehicle() );
        }
        return vehicles;
    };


    static getMakeOptions = () => {
        return Object.keys( Vehicle.MAKE_MODEL_SETS );
    };
    static getModelOptions = ( makes ) => {
        const models = [];
        makes.forEach( make => {
            if ( Vehicle.MAKE_MODEL_SETS[ make ] ) {
                models.push( ...Vehicle.MAKE_MODEL_SETS[ make ] );
            }
        } );
        return models;
    };
    static getSortOptions = () => {
        return [
            "make",
            "startingBid",
            "auctionDateTime",
            "year",
            "mileage",
        ];

    };
    static isKeywordStringField = ( keyword ) => {
        return [
            Vehicle.API_KEYWORDS.make,
            Vehicle.API_KEYWORDS.model,
            Vehicle.API_KEYWORDS.fuel,
            Vehicle.API_KEYWORDS.location,
        ].includes( keyword );
    };


    static get( path, queryParams ) {
        /*
        These are the query Params, if they are different from null, I want them applied on the
        array of vehicles.
        "filter": { // EQ, GT, LT filters
            "make": null,
            "model": null,
            "startingBid_range_start": null,
            "startingBid_range_end": null,
            "favourites": null,
        },
        "sort": { // Sorts by field name, ascending/descending
            "sortBy": null,
            "ascending": null,
        },
        "count": {
            "page": 1,
            "perPage": resultsPerPage,
        }
        */
        /* This would be a call to an API using some generic fetch function */
        let vehicles = path.map( vehicle => Vehicle.fromJson( vehicle ) );
        let totalCount = vehicles.length;

        console.log( "DEBUG:VEHICLES/GET: Applying query params: ", queryParams );
        if ( queryParams.filter ) {
            // Destructure the filter inner JSON
            const { make, model, favourite } = queryParams.filter;
            vehicles = vehicles.filter( vehicle => {
                let matches = true;

                if ( make ) {
                    matches = matches && vehicle.make.toLowerCase() === queryParams.filter.make.toLowerCase();
                }
                if ( model ) {
                    matches = matches && vehicle.model.toLowerCase() === queryParams.filter.model.toLowerCase();
                }
                if ( favourite !== null && favourite !== undefined ) {
                    matches = matches && vehicle.favourite === favourite;
                }

                return matches;
            } );
        }
        if ( queryParams.rangeFilter ) {
            // Destructure the rangeFilter inner JSON
            const { startingBid, mileage, year } = queryParams.rangeFilter;
            vehicles = vehicles.filter( vehicle => {
                let matches = true;
                if ( startingBid.min || startingBid.max ) {
                    matches = matches
                        && vehicle.startingBid >= ( startingBid.min || 0 )
                        && vehicle.startingBid <= ( startingBid.max || Infinity );
                }
                if ( mileage.min || mileage.max ) {
                    matches = matches
                        && vehicle.mileage >= ( mileage.min || 0 )
                        && vehicle.mileage <= ( mileage.max || Infinity );
                }
                if ( year.min || year.max ) {
                    matches = matches
                        && vehicle.year >= ( year.min || 0 )
                        && vehicle.year <= ( year.max || Infinity );
                }
                return matches;
            } );
        }

        const filteredCount = vehicles.length;

        // Apply sorting
        if ( queryParams.sort ) {
            // Destructure the sort inner JSON
            const { sortBy, ascending } = queryParams.sort;

            if ( sortBy ) {
                vehicles.sort( ( a, b ) => {
                    if ( a[ sortBy ] < b[ sortBy ] ) return ascending ? -1 : 1;
                    if ( a[ sortBy ] > b[ sortBy ] ) return ascending ? 1 : -1;
                    return 0;
                } );
            }
        }

        // Apply pagination
        const perPage = queryParams.pagination?.perPage || 10;
        const totalPages = Math.ceil( filteredCount / perPage );
        const currentPage = queryParams.pagination?.page || 1;

        const validatedPage = Math.max( 1, Math.min( currentPage, totalPages ) );

        const startIndex = ( validatedPage - 1 ) * perPage;
        const endIndex = startIndex + perPage;
        const paginatedVehicles = vehicles.slice( startIndex, endIndex );
        const currentPageCount = paginatedVehicles.length;

        const metadata = {
            totalCount,
            filteredCount,
            currentPageCount,
            currentPage: validatedPage,
            perPage,
            pageCount: totalPages,
            lastPage: totalPages,
            hasNextPage: validatedPage < totalPages,
            hasPreviousPage: validatedPage > 1,
            startIndex: startIndex + 1,
            endIndex: Math.min( endIndex, filteredCount )
        };

        return {
            vehicles: paginatedVehicles,
            metadata
        };
    }

    static patch( path, vehicle ) {
        // Here i would update the vehicle by ID
    }

    static parseEmissionsValue( value ) {
        if ( value === null ) {
            return null;
        }
        if ( typeof value === "number" ) {
            return value;
        }
        if ( typeof value === "string" ) {
            return parseInt( value.split( " " )[ 0 ], 10 );
        }
        return null;
    }
    static parseEmissionsValueToString( value ) {
        if ( value === null ) {
            return null;
        }
        return `${ value } g/km`;
    }


    static fromJson( json ) {
        return new Vehicle( {
            reference: json[ Vehicle.API_KEYWORDS.reference ],
            make: json[ Vehicle.API_KEYWORDS.make ],
            model: json[ Vehicle.API_KEYWORDS.model ],
            engineSize: json[ Vehicle.API_KEYWORDS.engineSize ],
            fuel: json[ Vehicle.API_KEYWORDS.fuel ],
            year: json[ Vehicle.API_KEYWORDS.year ],
            mileage: json[ Vehicle.API_KEYWORDS.mileage ],
            auctionDateTime: json[ Vehicle.API_KEYWORDS.auctionDateTime ],
            startingBid: json[ Vehicle.API_KEYWORDS.startingBid ],
            favourite: json[ Vehicle.API_KEYWORDS.favourite ],
            location: json[ Vehicle.API_KEYWORDS.location ],
            details: {
                ...json[ Vehicle.API_KEYWORDS.details ],
                specification: {
                    ...json[ Vehicle.API_KEYWORDS.details ].specification,
                    co2Emissions: Vehicle.parseEmissionsValue(
                        json[ Vehicle.API_KEYWORDS.details ].specification?.co2Emissions
                    ),
                }
            },
        } );
    }

    static toJson( vehicle ) {
        return {
            [ Vehicle.API_KEYWORDS.reference ]: vehicle.reference,
            [ Vehicle.API_KEYWORDS.make ]: vehicle.make,
            [ Vehicle.API_KEYWORDS.model ]: vehicle.model,
            [ Vehicle.API_KEYWORDS.engineSize ]: vehicle.engineSize,
            [ Vehicle.API_KEYWORDS.fuel ]: vehicle.fuel,
            [ Vehicle.API_KEYWORDS.year ]: vehicle.year,
            [ Vehicle.API_KEYWORDS.mileage ]: vehicle.mileage,
            [ Vehicle.API_KEYWORDS.auctionDateTime ]: vehicle.auctionDateTime,
            [ Vehicle.API_KEYWORDS.startingBid ]: vehicle.startingBid,
            [ Vehicle.API_KEYWORDS.favourite ]: vehicle.favourite,
            [ Vehicle.API_KEYWORDS.location ]: vehicle.location,
            [ Vehicle.API_KEYWORDS.details ]: {
                [ Vehicle.API_KEYWORDS.specification ]: {
                    ...vehicle.specification,
                    co2Emissions: Vehicle.parseEmissionsValueToString(
                        vehicle.specification?.co2Emissions
                    ),
                },
                [ Vehicle.API_KEYWORDS.ownership ]: vehicle.ownership,
                [ Vehicle.API_KEYWORDS.equipment ]: vehicle.equipment,
            },
        };
    }


}

export default Vehicle;