export function OfficeLocation(props){  /* use any variable name */
    return (
        <article className="border border-5 p-3 bg-white" style={{width:'300px'}}>
            <header>
                <h4>{props.office.location}</h4>
            </header>
            <address>
                {props.office.address}
            </address>
        </article>
    );
}