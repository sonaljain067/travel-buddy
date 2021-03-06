export default function InformationContainer({icon, upperDescription,lowerDescription}){
    return (
        <>
            <div className="information-container">
                <span className="icon">{icon}</span>
                <span className="upper">{upperDescription}</span>
                <span className="lower">{lowerDescription}</span>
            </div>
            <style jsx>{`
                .information-container{
                    display: grid;
                    grid-template-areas: "icon upper" "icon lower"; 
                    grid-gap: 7px;
                    background: #f2f8fb;
                    border-radius: 8px;
                    padding: 10px;
                }
                .icon{
                    grid-area: icon;
                    font-size: 24px;
                    padding: 12px;  
                    display: flex;
                    align-items: center;
                }
                .upper{
                    grid-area: upper;
                }
                .lower{
                    grid-area: lower; 
                }
            `}</style>
        </>
    )
}