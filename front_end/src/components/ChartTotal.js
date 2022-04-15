const ChartTotal=(props)=>{

    return(
        <div>
            <div className="row mb-1" id="chartotal">
                <div className="col-6 col-sm-auto flex-sm-grow-1 py-3">
                    <h3>TOTAL VIEWS</h3>
                    <h3>{props.totalViewTime}</h3>
                    <h3 className="text-primary">{props.totalViews}</h3>
                </div>
                <div className="col-6 col-sm-auto flex-sm-grow-1 border-start py-3">
                    <h3>YESTERDAY <br/> TOTAL VIEWS</h3>
                    <h3 className="text-primary">{props.yesterdayTotalViews}</h3>
                </div>
            </div>
        </div>

    );


}
export default ChartTotal;