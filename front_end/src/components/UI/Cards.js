import CardUI from "./CardUI"

const Cards=(props)=>{
    const cardLayout=(image)=>{
        return(
            <div className="col-md-2">
                <CardUI 
                    imgAddress={image.imgURL}
                    groupname={image.name}
                />
            </div>
        );
      }
      
    return(
        
        <div className="row">
            {props.folder.map(cardLayout)}   
        </div>

    );

}
export default Cards;