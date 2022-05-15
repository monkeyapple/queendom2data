const DataFactory=(data)=>{
    var sumToday
    var sumYesterday
    var todayTime
    var yesterdayTime
    var subtractionViews
    var sumYesterday_v=0
    var sumToday_v=0

    try{
        const len=data.length
        const getAlldata=Object.values(data).map((rowData,index)=>{
            if(rowData[13].slice(0,16)===data[length-1][13].slice(0,16) && rowData[13].slice(17,25)==="00:00:00" ){
                const yesterday_row_values = Object.values(rowData)
                for(i=0;i<yesterday_row_values.length-1;i++){
                    if (typeof yesterday_row_values[i] == 'number'){
                        sumYesterday_v+=yesterday_row_values[i]
                    }
                }
                sumYesterday=sumYesterday_v.toLocaleString()
                yesterdayTime=rowData[13].slice(5,12)+rowData[13].slice(17,25)
            }
                
            if(rowData[13].slice(0,16)===data[length-1][13].slice(0,16) && rowData[13].slice(17,25)==="00:00:00" ){
                todayTime=rowData[13].slice(5,12)+rowData[13].slice(17,25)
                const today_row_values = Object.values(rowData)
                for(var i=0;i<today_row_values.length-1;i++){
                    if (typeof today_row_values[i] == 'number'){
                        sumToday_v+=today_row_values[i]
                    }
                }
                sumToday= sumToday_v.toLocaleString()
                todayTime=rowData[13].slice(5,12)+rowData[13].slice(17,25)
            }

            var substractResult=sumToday_v-sumYesterday_v
            subtractionViews=substractResult.toLocaleString()
  
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
                'sumToday':sumToday,
                'sumYesterday':sumYesterday,
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
export default DataFactory;