export function OfficeLocation(props){  /* use any variable name */
    return (
        <article className="border border-5">
            <header>
                <h4>{props.office.location}</h4>
            </header>
            <address>
                {props.office.address}
            </address>
        </article>
    );
}