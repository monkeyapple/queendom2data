import LineChart from "./LineChart";
import "./UI/styles.css";
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

    (props.alldata).forEach(ele => {
        labels.push(ele['update_time']);
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
    console.log(vivizViewData)
    console.log(hyolynViewData)
    return(
        <div>
            <div className="box card">
            <LineChart labels={labels} bravegirlsViewData={bravegirlsViewData} hyolynViewData={hyolynViewData} kep1erViewData={kep1erViewData} loonaViewData={loonaViewData} vivizViewData={vivizViewData} wjsnViewData={wjsnViewData}/>
            </div>
            
        </div>
    );

}
export default Per1Charts;