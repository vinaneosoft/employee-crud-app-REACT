import "./Footer.css"

 function Footer(){
    let authorName="Vina Patil";
    return(
        <footer className="mainfooter">
            <p>
                <small className="text-success">NEOSOFT EMPLOYEE MANAGEMENT</small><br></br>
                <small className="author">Author Name : <span>{authorName}</span></small>
            </p>
        </footer>
    );
}
export default Footer
/*class -> className*/
/** {} : React data binding : JSX expression */
