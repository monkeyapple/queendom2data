import LineChart from "./LineChart";
import LineChartScroll from "./LineChartScroll";
import "./UI/Shadowbox.css";
import ChartTotal from "./ChartTotal";
const Per1Charts=(props)=>{
    const bravegirlsViewData=[];
    // const bravegirlsLikesData=[];
    const hyolynViewData=[];
    // const hyolynLikesData=[];
    const kep1erViewData=[];
    // const kep1erLikesData=[];
    const loonaViewData=[];
    // const loonaLikesData=[];
    const vivizViewData=[];
    // const vivizLikesData=[];
    const wjsnViewData=[];
    // const wjsnLikesData=[];
    const labels=[];

    (props.alldata_Per1).forEach(ele => {
        var d=new Date(ele['update_time'])
        console.log(d)
        d.setHours(d.getHours() - 8);
        labels.push(d);
        bravegirlsViewData.push(ele['bravegirls_views']);
        // bravegirlsLikesData.push(ele['bravegirls_likes']);
        hyolynViewData.push(ele['hyolyn_views']);
        // hyolynLikesData.push(ele['hyolyn_likes']);
        kep1erViewData.push(ele['kep1er_views']);
        // kep1erLikesData.push(ele['kep1er_likes']);
        loonaViewData.push(ele['loona_views']);
        // loonaLikesData.push(ele['loona_likes']);
        vivizViewData.push(ele['viviz_views']);
        // vivizLikesData.push(ele['viviz_likes']);
        wjsnViewData.push(ele['wjsn_views']);
        // wjsnLikesData.push(ele['wjsn_likes'])

    });
    return(
        <div>

            {/* <div className="box shadowcard" id="chartWrapper">
                <ChartTotal totalViews={props.totalViews}/>
                <LineChart labels={labels} bravegirlsViewData={bravegirlsViewData} hyolynViewData={hyolynViewData} kep1erViewData={kep1erViewData} loonaViewData={loonaViewData} vivizViewData={vivizViewData} wjsnViewData={wjsnViewData}/>
            </div>   */}
            <div className="card" id="per1card">
                <div className="card-header">
                    <h2>YouTube Views&Likes</h2>
                </div>
                <div className="card-body">
                    <ChartTotal totalViews={props.totalViews} yesterdayTotalViews={props.yesterdayTotalViews} totalViewTime={props.totalViewTime}/>
                    <LineChart labels={labels} bravegirlsViewData={bravegirlsViewData} hyolynViewData={hyolynViewData} kep1erViewData={kep1erViewData} loonaViewData={loonaViewData} vivizViewData={vivizViewData} wjsnViewData={wjsnViewData}/>
                </div>
                
            </div>  
        </div>

    );

}
export default Per1Charts;