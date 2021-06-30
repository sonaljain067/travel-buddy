import InformationContainer from "./InformationContainer";

export default function AccomodationCheckIn({startDate, checkInTime, name, phone, address}){
    return (
        <>
            <InformationContainer
                icon="🏨"
                upperDescription={`${startDate} ${checkInTime}`}
                lowerDescription={`${name}, ${address} ${phone}`}
            />
        </>
    )
}

