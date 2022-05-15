import {CardUI,UnitCardUI} from "./CardUI"

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
export const UnitCards=(props)=>{
    const cardLayout=(group)=>{
        return(
            <div className="row mb-3 mt-3">
                <UnitCardUI 
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
            <div className="unit-title">
                <h7>{props.unitName}</h7>
            </div>
                
            {props.assets.map(cardLayout)}   
        </div>
    );
}
