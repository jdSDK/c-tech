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
    };

    static get(path) {
        /* This would be a call to an API */
        return path.map(vehicle => Vehicle.fromJson(vehicle));
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
            details: json[Vehicle.API_KEYWORDS.details],
        });
    }
}

export default Vehicle;