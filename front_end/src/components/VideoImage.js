const VideoImage=(props)=>{
    return(
        <img src={props.imgURL[props.performanceNum-1]} alt="video_img" className="card-img-top"></img>
        
    );

}
export default VideoImage;