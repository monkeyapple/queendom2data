import VideoImage from "../VideoImage";
import "./CardUI.css"
export const CardUI=(props)=>{
    return(
        <div className="card text-center">
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
export const UnitCardUI=(props)=>{
    return(
        <div className="card text-center">
            <div className="row">
                <div className="overflow col-lg-6 mb-2 mt-2">
                    <VideoImage imgURL={props.imgURL} performanceNum={props.performanceNum}/>
                </div>
                <div className="card-body col-lg-6 my-auto">
                    <div className="row">
                        <div className="col mb-1">
                            <h9 className="card-title">{props.groupname}</h9>
                        </div>
                        <div className="col mt-1">
                            <a href={props.link} className='btn btn-outline-success' target="_blank">                
                            Watch
                            </a>
                        </div>

                    </div>
                </div>
            </div>    
        </div>
    );
}
