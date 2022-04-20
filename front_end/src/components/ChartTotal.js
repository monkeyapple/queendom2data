const ChartTotal=(props)=>{

    return(
        <div>
            <div className="row mb-1" id="chartotal">
                <div className="col-6 col-sm-auto flex-sm-grow-1 py-3">
                    <h3>TOTAL VIEWS</h3>
                    <h6>till {props.totalViewTime&&props.totalViewTime.slice(0,16)}</h6>
                    <div class="text-center">
                        {(props.subtractionViews&&(props.subtractionViews)[0]==='-')?<span class="badge badge-decrease-bg">-{props.subtractionViews}</span>:<span class="badge badge-increase-bg">+{props.subtractionViews}</span>}
                    </div>
                    <h4 className="text-primary">{props.totalViews}</h4>
                </div>
                <div className="col-6 col-sm-auto flex-sm-grow-1 border-start py-3">
                    <h3>LAST DAY <br/> TOTAL VIEWS</h3>
                    
                    <h6>till {props.lastDayTime&&props.lastDayTime.slice(0,16)}</h6>
                    <h4 className="text-primary">{props.lastDayTotalViews}</h4>
                </div>
            </div>
        </div>

    );


}
export default ChartTotal;