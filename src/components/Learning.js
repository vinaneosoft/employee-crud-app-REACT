

export function Learning(){
    let companyName="Neosoft"
    let joinLocation="Rabale";
    return (
        <>
            <h5>{companyName}</h5>  {/* JSX expression*/} 
            <div>
                {
                 joinLocation.toLowerCase()=='rabale'?  
                 <address>Rabale address</address> : 
                 <address>Dadar address</address>
                }
            </div>
        </>
    );
}