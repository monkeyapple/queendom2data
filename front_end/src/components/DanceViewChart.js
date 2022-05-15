import DanceLineChart from "./DanceLineChart";
import "./UI/Shadowbox.css";
import {UnitCards} from "./UI/Cards";
const DanceViewCharts=(props)=>{
    const hyolynwjsnViewData=[];
    // const hyolynwjsnViewDataLikesData=[];
    const bravegirlsloonaViewData=[];
    // const bravegirlsloonaLikesData=[];
    const vivizkep1erViewData=[];
    // const vivizkep1erLikesData=[];

    const labels=[];
    
    {props.allData&&(props.allData).forEach(ele => {
        var d=new Date(ele['update_time'])
        d.setHours(d.getHours() - 8);
        labels.push(d);
        hyolynwjsnViewData.push(ele['hoylyn_wjsn_views']);
        // hyolynwjsnLikesData.push();
        bravegirlsloonaViewData.push(ele['bravegirls_loona_views']);
        //bravegirlsloonaViewData.push();
        vivizkep1erViewData.push(ele['viviz_kep1er_views']);
        // vivizkep1erLikesData.push();

    });
    }
    return(
        <div>
            <div class="container-fluid view-chart row">
                <div className="col-lg-4">
                    <UnitCards assets={props.assets} performanceNum={props.performanceNum} unitName={props.unitName}/>
                </div>
                <div className="view-chart col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h2>YouTube Views</h2>
                        </div>
                        <div className="card-body">
                            <DanceLineChart labels={labels} hyolynwjsnViewData={hyolynwjsnViewData} bravegirlsloonaViewData={bravegirlsloonaViewData} vivizkep1erViewData={vivizkep1erViewData}/>
                        </div>
                    </div>  
                </div>

            </div>
        </div>


    );

}
export default DanceViewCharts;