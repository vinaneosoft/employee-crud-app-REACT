/** hooks chapter : we will take user input */

import { Dadar } from "./Dadar";
import { OfficeLocation } from "./OfficeLocation";
import { Rabale } from "./Rabale";

export function Learning(){
    let companyName="Neosoft"
    let joinLocation="rabale";
    let companyOffices=['Dadar, Mumbai', 'Rabale, Mumbai', 'Parel, Mumbai', 'Pune' , 'Noida' ]
    
    const liNodes=companyOffices.map((city,i)=><li key={'c'+i}>{city}</li>)
    
    let getMessage=function(){
        return "hello we are implementing examples on JSX expression"
    }

    let offices= [
        {
            location:'Dadar, Mumbai',
            address:'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028'
        },
        {
            location:'Rabale, Mumbai',
            address:'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'
        }, 
        {
            location:'Parel, Mumbai',
            address:'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013'
        },
        {
            location:'Pune',
            address:'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057'
        },
        {
            location:'Noida',
            address:'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'
        }
    ]

    let officeTemplate=offices.map((office)=><OfficeLocation  office={office}></OfficeLocation>) /* react props*/
    return (
        <>
            <h5>{companyName}</h5>  {/* JSX expression*/} 
            <div>
                <h4>If then else</h4>
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
                <h4>if-then</h4>
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
            <hr></hr>
            <div>
            <h4>If then else (template in component)</h4>
                {
                 joinLocation.toLowerCase()=='rabale'?<Rabale></Rabale>:<Dadar></Dadar>
                }
            </div>
            <div>
                <b>{getMessage()}</b>
                <i>{56*78}</i>
            </div>
            <hr></hr>
            <h4>Company Offices</h4>
            <div>
                <ol>
                    {liNodes}
                </ol>
            </div>
            <div>
                <ol>
                    {companyOffices.map((city, i)=><li key={'o'+i}>{city}</li>)}
                </ol>
            </div>
            <hr></hr>
            <section className="d-flex justify-contents-between">
                {officeTemplate}
            </section>
          
        </>
    );
}