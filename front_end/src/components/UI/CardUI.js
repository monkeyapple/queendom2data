import VideoImage from "../VideoImage";

const CardUI=(props)=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <VideoImage imgAddress={props.imgAddress}/>
            </div>
        </div>
    );
}
export default CardUI;