import AccomodationCheckIn from "./AccomodationCheckIn";
import Accomodation from "./AccomodationCheckIn";
import AccomodationCheckOut from "./AccomodationCheckOut";
import Flight from "./Flight";
import Restaurant from "./Restaurant";

export default function Itinerary({itinerary}){
    return (
        <>
            <div className="itinerary">
            {itinerary.flights.map(flight => (
                <Flight 
                departureTime= {flight.departureTime}
                arrivalTime={flight.arrivalTime}
                date= {flight.date}
                destination= {flight.destination}
                origin= {flight.origin}
                key={flight.confirmation}
            />
            ))}
            {itinerary.accomodation.map(place => (
                <AccomodationCheckIn 
                startDate={place.startDate}
                checkInTime={place.checkInTime}
                name={place.name}
                address={place.address}
            />
            ))}
            {itinerary.restaurants.map(restaurant => (
                <Restaurant 
                time={restaurant.time}
                date={restaurant.date}
                name={restaurant.name}
                address={restaurant.address}
            />
            ))}
        </div>
        <style jsx>{`
            .itinerary{
                display: flex;
                flex-direction: column;
                margin: auto;
                grid-gap: 18px;
                padding: 18px 0;
                width: 50%;
            }
        `}</style>
        </>
    )
}