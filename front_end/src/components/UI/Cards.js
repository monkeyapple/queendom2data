import {CardUI,VocalCardUI} from "./CardUI"

export const Cards=(props)=>{
    const cardLayout=(group)=>{
        return(
            <div className="col-md-2">
                <CardUI 
                    imgURL={group.imgURL}
                    performanceNum={props.performanceNum}
                    groupname={group.name}
                    link={group.videoLink[props.performanceNum-1]}
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
export const VocalCards=(props)=>{
    const cardLayout=(group)=>{
        return(
            <div className="row mb-3 mt-3">
                <VocalCardUI 
                    imgURL={group.imgURL}
                    performanceNum={props.performanceNum}
                    groupname={group.name}
                    link={group.videoLink[props.performanceNum-1]}
                />
            </div>
        );
      }
      
    return(
        <div>
            <div>
                <h7>Vocal Unit</h7>
            </div>
                
            {props.assets.map(cardLayout)}   
        </div>
    );
}
