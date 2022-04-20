import VideoImage from "../VideoImage";
import "./CardUI.css"
const CardUI=(props)=>{
    return(
        <div className="card text-center" id="videoCards">
            <div className="overflow">
                <VideoImage imgURL={props.imgURL} performanceNum={props.performanceNum}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.groupname}</h5>
                <a href={props.link} className='btn btn-outline-success' target="_blank">
                Watch
                </a>
            </div>    
        </div>
    );
}
export default CardUI;