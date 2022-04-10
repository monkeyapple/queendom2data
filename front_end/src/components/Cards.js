import CardUI from "./UI/CardUI"

const Cards=(props)=>{
    const cardLayout=(image)=>{
        return(
            <div className="col-md-6">
                <CardUI 
                    imgAddress={image.imgURL}
                />
            </div>
        );
      }
      
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {props.folder.map(cardLayout)}   
            </div>
        </div>
    );

}
export default Cards;