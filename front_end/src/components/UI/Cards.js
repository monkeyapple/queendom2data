import CardUI from "./CardUI"

const Cards=(props)=>{
    const cardLayout=(group)=>{
        return(
            <div className="col-md-2">
                <CardUI 
                    imgAddress={group.imgURL}
                    groupname={group.name}
                    link={group.per1Link}
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