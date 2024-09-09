

export function Learning(){
    let companyName="Neosoft"
    let joinLocation="rabale";
    return (
        <>
            <h5>{companyName}</h5>  {/* JSX expression*/} 
            <div>
                {
                 joinLocation.toLowerCase()=='rabale'?  
                 <address> 
                        Sigma IT Park, <br />
                     Unit No. 501, TTC Industrial Area, <br />
                      Rabale, Navi Mumbai,  <br />
                      Maharashtra 400701 
                 </address> : 
                 <address>
                    The Ruby Tower,  <br />
                    Senapati Bapat Marg,  <br />
                    Dadar West, Mumbai,  <br />
                    Maharashtra 400028
                 </address>
                }
            </div>
            <hr></hr>
            <div>
                {joinLocation.toLowerCase()=='rabale' && 
                <address> 
                Sigma IT Park, <br />
                 Unit No. 501, TTC Industrial Area, <br />
                Rabale, Navi Mumbai,  <br />
                Maharashtra 400701 
                </address> }
            </div>
            <hr></hr>
            <div>
                {joinLocation.toLowerCase()=='dadar' && 
                <address>
                The Ruby Tower,  <br />
                Senapati Bapat Marg,  <br />
                Dadar West, Mumbai,  <br />
                Maharashtra 400028
                </address> }
            </div>
        </>
    );
}