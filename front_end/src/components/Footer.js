import {AiFillTwitterCircle} from "react-icons/ai"
const Footer=()=>{

    return(
        <footer class="footer-section">
            <div class="container-fluid d-flex justify-content-end">
                <a class="btn btn-link btn-floating btn-lg text-white m-1"
                    href="https://twitter.com/EffyLH20"
                    role="button"><AiFillTwitterCircle color="cornflowerblue" size="2.5em"/>
                </a>
      
                {/* <a class="btn btn-link btn-floating btn-lg text-white m-1"
                    href="https://github.com/monkeyapple"
                    role="button">
                </a>     */}
                
            </div>
        </footer>


    );

}
export default Footer;