import VideoImage from "../VideoImage";
import "./CardUI.css"
const CardUI=(props)=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <VideoImage imgAddress={props.imgAddress}/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.groupname}</h4>
                {/* <a href='#' className='btn btn-outline-success'>
                Watch
                </a> */}
            </div>    
        </div>
    );
}
export default CardUI;