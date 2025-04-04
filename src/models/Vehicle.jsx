/*
docs go here
*/
class Vehicle {
    constructor({
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
    }) {
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

    static MAKE_MODEL_SETS = {
        "Toyota": ["Corolla", "C- HR"],
        "Ford": ["Focus", "Fiesta", "Focus C-Max"],
        "Volkswagen": ["Polo", "Passat", "Golf"],
        "Audi": ["A3", "A4"],
        "Volvo": ["C40", "C30", "V40"],
        "Citroen": ["C3 Aircross", "C5 Aircross", "C3 Origin"],
        "BMW": ["3 Series", "1 Series"],
        "Mercedes-Benz": ["A-Class Hatchback", "B-Class", "A-Class Saloon"],
    }

    static getMakeOptions = () => Object.keys(Vehicle.MAKE_MODEL_SETS);

    static getModelOptions = (makes) => {
        const models = [];
        makes.forEach(make => {
            if (Vehicle.MAKE_MODEL_SETS[make]) {
                models.push(...Vehicle.MAKE_MODEL_SETS[make]);
            }
        });
        return models;
    }

    static get(path, queryParams) {
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
        let vehicles = path.map(vehicle => Vehicle.fromJson(vehicle));
        let totalCount = vehicles.length;

        console.log("DEBUG:VEHICLES/GET: Applying query params: ", queryParams);
        if (queryParams.filter) {
            // Destructure the filter inner JSON
            const { make, model, startingBid_range_start, startingBid_range_end, favourite } = queryParams.filter;
            vehicles = vehicles.filter(vehicle => {
                let matches = true;

                if (make) {
                    matches = matches && vehicle.make.toLowerCase() === queryParams.filter.make.toLowerCase();
                }
                if (model) {
                    matches = matches && vehicle.model.toLowerCase() === queryParams.filter.model.toLowerCase();
                }
                if (startingBid_range_start !== null && startingBid_range_start !== undefined) {
                    matches = matches && vehicle.startingBid >= queryParams.filter.startingBid_range_start;
                }
                if (startingBid_range_end !== null && startingBid_range_end !== undefined) {
                    matches = matches && vehicle.startingBid <= queryParams.filter.startingBid_range_end;
                }
                if (favourite !== null && favourite !== undefined) {
                    matches = matches && vehicle.favourite === favourite;
                }

                return matches;
            });
        }

        const filteredCount = vehicles.length;

        // Apply sorting
        if (queryParams.sort) {
            // Destructure the sort inner JSON
            const { sortBy, ascending } = queryParams.sort;

            if (sortBy) {
                vehicles.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) return ascending ? -1 : 1;
                    if (a[sortBy] > b[sortBy]) return ascending ? 1 : -1;
                    return 0;
                });
            }
        }

        // Apply pagination
        const perPage = queryParams.pagination?.perPage || 10;
        const totalPages = Math.ceil(filteredCount / perPage);
        const currentPage = queryParams.pagination?.page || 1;

        const validatedPage = Math.max(1, Math.min(currentPage, totalPages));

        const startIndex = (validatedPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        const paginatedVehicles = vehicles.slice(startIndex, endIndex);
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
            endIndex: Math.min(endIndex, filteredCount)
        };

        return {
            vehicles: paginatedVehicles,
            metadata
        };
    }

    static parseEmissionsValue(value) {
        if (value === null) {
            return null;
        }
        if (typeof value === "number") {
            return value;
        }
        if (typeof value === "string") {
            return parseInt(value.split(" ")[0], 10);
        }
        return null;
    }

    static fromJson(json) {
        return new Vehicle({
            make: json[Vehicle.API_KEYWORDS.make],
            model: json[Vehicle.API_KEYWORDS.model],
            engineSize: json[Vehicle.API_KEYWORDS.engineSize],
            fuel: json[Vehicle.API_KEYWORDS.fuel],
            year: json[Vehicle.API_KEYWORDS.year],
            mileage: json[Vehicle.API_KEYWORDS.mileage],
            auctionDateTime: json[Vehicle.API_KEYWORDS.auctionDateTime],
            startingBid: json[Vehicle.API_KEYWORDS.startingBid],
            favourite: json[Vehicle.API_KEYWORDS.favourite],
            location: json[Vehicle.API_KEYWORDS.location],
            details: {
                ...json[Vehicle.API_KEYWORDS.details],
                specification: {
                    ...json[Vehicle.API_KEYWORDS.details].specification,
                    co2Emissions: Vehicle.parseEmissionsValue(
                        json[Vehicle.API_KEYWORDS.details].specification?.co2Emissions
                    ),
                }
            },
        });
    }
}

export default Vehicle;