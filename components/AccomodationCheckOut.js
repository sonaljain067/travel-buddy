import InformationContainer from "./InformationContainer";

export default function AccomodationCheckOut({endDate, checkOutTime, name, phone, address}){
    return (
        <>
            <InformationContainer
                icon="🏨"
                // startDate= "Jul 2"
                // endDate= "Jul 10"
                // checkInTime= "12:00"
                // checkOutTime= "07:00"
                // name= "The Taj Mahal Palace Apollo Bunder Road The Taj Mahal Palace, Colaba, 400001, Mumbai India"
                // phone= "XXX"
                // confirmation= "35948hfbdfh59"
                upperDescription={`${endDate} ${checkOutTime}`}
                lowerDescription={`${name}, ${address} ${phone}`}
            />
        </>
    )
}

