export const DataFactory=(data)=>{

    try{
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
                'allData':getAlldata
        }
        );
    }catch(error){
        console.error(error)
    }

}