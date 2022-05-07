export const DataFactoryVocal=(data)=>{
    var sumLastDay
    var sumLastRow
    var lastRowTime
    var lastDayTime
    var subtractionViews
    var sumLastRow_v=0
    var sumLastDay_v=0

    try{
        const getAlldata=Object.values(data).map((rowData,index)=>{
            if(rowData[9].slice(0,16)===data[data.length-1][9].slice(0,16) && rowData[9].slice(17,25)==="00:00:00" ){
                lastDayTime=rowData[9].slice(5,12)+rowData[9].slice(17,25)
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
            lastRowTime=rowData[9].slice(5,12)+rowData[9].slice(17,25)
            var substractResult=sumLastRow_v-sumLastDay_v
            subtractionViews=substractResult.toLocaleString()
            }    
            return{
                wjsn_viviz_views:rowData[1],
                wjsn_viviz_likes:rowData[2],
                loona_kep1er_views:rowData[3],
                loona_kep1er_likes:rowData[4],
                viviz_views:rowData[5],
                viviz_likes:rowData[6],
                hyolyn_bravegirls_views:rowData[7],
                hyolyn_bravegirls_likes:rowData[8],
                update_time:rowData[9]

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