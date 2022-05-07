import {AiFillTwitterCircle} from "react-icons/ai"
const Footer=()=>{

    return(
        <footer className="footer-section">

            <div className="d-flex justify-content-end col">
                <a className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="https://twitter.com/EffyLH20/status/1517019909921787904?s=20&t=u0W0ktzwsvnbc3pteKYdIg"
                    role="button"><AiFillTwitterCircle color="cornflowerblue" size="2.5em"/>
                </a>
    
                {/* <a className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="https://github.com/monkeyapple"
                    role="button">
                </a>     */}
                
            </div>

        </footer>


    );

}
export default Footer;