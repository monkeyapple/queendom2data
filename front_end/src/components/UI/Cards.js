import CardUI from "./CardUI"

const Cards=(props)=>{
    const cardLayout=(group)=>{
        return(
            <div className="col-md-2">
                <CardUI 
                    imgURL={group.imgURL}
                    performanceNum={props.performanceNum}
                    groupname={group.name}
                    link={group.videoLink[props.performanceNum]}
                />
            </div>
        );
      }
      
    return(
        
        <div className="row">
            {props.assets.map(cardLayout)}   
        </div>

    );

}
export default Cards;