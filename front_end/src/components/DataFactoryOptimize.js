// Used this function module when datapoints exceeded
const DataFactoryOptimize=(data)=>{
    var sumToday
    var sumYesterday
    var todayTime
    var yesterdayTime
    var subtractionViews
    var sumToday_v=0
    var sumYesterday_v=0

    try{
        const len=data.length
        //today's row of data
        const today_row_values=data[len-1]
        todayTime=today_row_values[13].slice(5,12)+today_row_values[13].slice(17,25)
        for(var i=0;i<today_row_values.length-1;i++){
            if (typeof today_row_values[i] == 'number'){
                sumToday_v+=today_row_values[i]
            }
        }
        sumToday=sumToday_v.toLocaleString()
        
        //yesterday's row of data.
        const yesterday_row_values=data[len-2]
        yesterdayTime=yesterday_row_values[13].slice(5,12)+yesterday_row_values[13].slice(17,25)
        for(var n=0;n<yesterday_row_values.length-1;n++){
            if (typeof yesterday_row_values[n] == 'number'){
                sumYesterday_v+=yesterday_row_values[n]
            }
        }
        sumYesterday= sumYesterday_v.toLocaleString()

        //calculate the substraction between today and yesterday
        var substractResult=sumToday_v-sumYesterday_v
        subtractionViews=substractResult.toLocaleString()

        //clean the raw data
        const getAlldata=Object.values(data).map((rowData)=>{  
            return{
                wjsn_views:rowData[1],
                wjsn_likes:rowData[2],
                kep1er_views:rowData[3],
                kep1er_likes:rowData[4],
                viviz_views:rowData[5],
                viviz_likes:rowData[6],
                hyolyn_views:rowData[7],
                hyolyn_likes:rowData[8],
                loona_views:rowData[9],
                loona_likes:rowData[10],
                bravegirls_views:rowData[11],
                bravegirls_likes:rowData[12],
                update_time:rowData[13]

            }
        });

        return(
            {
                'sumYesterday':sumYesterday,
                'sumToday':sumToday,
                'todayTime':todayTime,
                'yesterdayTime':yesterdayTime,
                'subtractionViews':subtractionViews,
                'allData':getAlldata
        }
        );
    }catch(error){
        console.error(error)
    }

}
export default DataFactoryOptimize;



























