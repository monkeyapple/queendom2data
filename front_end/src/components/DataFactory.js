export const DataFactory=(data)=>{
    var sumLastDay
    var sumLastRow
    var lastRowTime
    var lastDayTime
    var subtractionViews
    var sumLastRow_v=0
    var sumLastDay_v=0

    try{
        const getAlldata=Object.values(data).map((rowData,index)=>{
            // when reach the last day  in the row
            if(rowData[12].slice(0,10)===data[data.length-1][12].slice(0,10) && rowData[12].slice(11)==="00:00:00" ){
                lastDayTime=rowData[12]
                const lastday_row_values = Object.values(rowData)
                for(var i=0;i<lastday_row_values.length-1;i++){
                    if (typeof lastday_row_values[i] == 'number'){
                        sumLastDay_v+=lastday_row_values[i]
                    }
            }
            sumLastDay= sumLastDay_v.toLocaleString()
            }
            // when reach the last element in the row,
            //re-initialize the sum amount
            if(data.length-1===index){
            const last_row_values = Object.values(rowData)
            for(i=0;i<last_row_values.length-1;i++){
                if (typeof last_row_values[i] == 'number'){
                    sumLastRow_v+=last_row_values[i]
                }
            }
            
            sumLastRow=sumLastRow_v.toLocaleString()
            lastRowTime=rowData[12]
            var substractResult=sumLastRow_v-sumLastDay_v
            subtractionViews=substractResult.toLocaleString()
            }    
            return{
                wjsn_views:rowData[0],
                wjsn_likes:rowData[1],
                kep1er_views:rowData[2],
                kep1er_likes:rowData[3],
                viviz_views:rowData[4],
                viviz_likes:rowData[5],
                hyolyn_views:rowData[6],
                hyolyn_likes:rowData[7],
                loona_views:rowData[8],
                loona_likes:rowData[9],
                bravegirls_views:rowData[10],
                bravegirls_likes:rowData[11],
                update_time:rowData[12]

            }
        });

        return(
            {
                'sumLastDay':sumLastDay,
                'sumLastRow':sumLastRow,
                'lastRowTime':lastRowTime,
                'lastDayTime':lastDayTime,
                'subtractionViews':subtractionViews,
                'allData':getAlldata
        }
        );
    }catch(error){
        console.error(error)
    }

}