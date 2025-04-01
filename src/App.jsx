import { useState, useEffect } from "react"
import Vehicle from "./models/Vehicle"
import jsonVehicleData from './data/vehicles_dataset.json';
import { randint } from "./utils/Functions";

function App() {

    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(true)

    const ARTIFICIAL_LOADING_TIME = randint(500, 1500);

    useEffect(() => {
        /*
        Load vehicle data, update on query params change.
        Simulates an API call with a timeout to show loading state
        handling.
        */
        const loadVehicleData = async () => {

            setTimeout(() => {
                let vehicleObjects = Vehicle.get(jsonVehicleData);
                setVehicles(vehicleObjects);
                setLoading(false);
            }, ARTIFICIAL_LOADING_TIME);
        };

        loadVehicleData();
    }, []);


    if (loading) {
        return <div>Loading...</div>
    }
    if (vehicles.length === 0) {
        return <div>No vehicles found</div>
    }
    return (
        <div>
            <h1>Vehicles</h1>
            <ul>
                {vehicles.map((vehicle, index) => (
                    <li key={index}>
                        {vehicle.make} {vehicle.model} - {vehicle.year}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default App
