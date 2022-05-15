import VocalLineChart from "./VocalLineChart";
import "./UI/Shadowbox.css";
import {UnitCards} from "./UI/Cards";
const VocalViewCharts=(props)=>{
    const wjsnVivizViewData=[];
    // const wjsnVivizLikesData=[];
    const loonaKep1erViewData=[];
    // const loonaKep1erLikesData=[];
    const hyolynBravegirlsViewData=[];
    // const hyolynBravegirlsLikesData=[];

    const labels=[];
    
    {props.allData&&(props.allData).forEach(ele => {
        var d=new Date(ele['update_time'])
        d.setHours(d.getHours() - 8);
        labels.push(d);
        wjsnVivizViewData.push(ele['wjsn_viviz_views']);
        // wjsnVivizLikesData.push();
        loonaKep1erViewData.push(ele['loona_kep1er_views']);
        //loonaKep1erViewData.push();
        hyolynBravegirlsViewData.push(ele['hyolyn_bravegirls_views']);
        // hyolynBravegirlsLikesData.push();

    });
    }
    return(
        <div>
            <div className='textTitle divider'>
                <h1>Round 3</h1>
            </div>


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
                            <VocalLineChart labels={labels} hyolynBraveGirlsViewData={hyolynBravegirlsViewData} wjsnVivizViewData={wjsnVivizViewData} loonaKep1erViewData={loonaKep1erViewData}/>
                        </div>
                    </div>  
                </div>

            </div>
        </div>


    );

}
export default VocalViewCharts;