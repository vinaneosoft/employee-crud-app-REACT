import { useEffect, useState } from "react";
import { initialArray } from "../app/model/data";
import { OfficeLocation } from "./OfficeLocation";
import { Increment } from "./Increment";
import { Decrement } from "./Decrement";
import { useSelector } from "react-redux";

export function Home(){
    const homeCounter=useSelector((state)=>state.counter.value);
    let [offices, setOffices]= useState(()=>initialArray());
    let officeTemplate=offices.map((office, i)=><OfficeLocation  key={'co'+i} office={office}></OfficeLocation>) /* react props*/
    
    useEffect(()=>{
        console.log("setup...");
        return ()=>{
            console.log("clean up.....");
            
        }
    })
    return (
        <article>
            <p>
                {homeCounter}
            </p>
            <p>
                Engineering ideas to improvise lives, NeoSOFT over the past 25 years,
                has empowered ambitious change-makers around the world with sustained 
                digital capabilities. 
                We are a trusted Digital Engineering and Enterprise Modernization partner 
                with offerings that enable our clients’ by creating a unique competitive advantage. While leaving room for continuous enhancement, NeoSOFT has leveraged the most in-demand technologies, methodologies, and framework components, for solving important client challenges. Combining deep technical competencies and industry experience, we ensure robustness, extensibility, and continuity in the solutions we deliver.
            </p>
            <section className="d-flex flex-wrap justify-content-between">
                {officeTemplate}
            </section>
            <div className="row">
                <div className="col border border-4">
                    <Increment></Increment>
                </div>
                <div className="col  border border-4">
                    <Decrement></Decrement>
                </div>
            </div>
        </article>
    );

}