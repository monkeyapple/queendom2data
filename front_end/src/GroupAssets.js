
import bravegirls_per1 from "./images/bravegirls_per1.jpeg"
import hyolyn_per1 from "./images/hyolyn_per1.jpeg"
import ke1per_per1 from "./images/ke1per_per1.jpeg"
import loona_per1 from "./images/loona_per1.jpeg"
import viviz_per1 from "./images/viviz_per1.jpeg"
import wjsn_per1 from "./images/wjsn_per1.jpeg"

import bravegirls_per2 from "./images/bravegirls_per2.jpeg"
import wjsn_per2 from "./images/wjsn_per2.jpeg"
import loona_per2 from "./images/loona_per2.jpeg"
import hyolyn_per2 from "./images/hyolyn_per2.jpeg"
import ke1per_per2 from "./images/ke1per_per2.jpeg"
import viviz_per2 from "./images/viviz_per2.jpeg"

import wjsnviviz_per3_v from "./images/wjsnviviz_per3_vocal.jpeg"
import hyolynbravegirls_per3_v from "./images/hyolynbravegirls_per3_vocal.jpeg"
import loonakep1er_per3_v from "./images/loonakep1er_per3_vocal.jpeg"

import hyolynwjsn_per3_d from "./images/hyolynwjsn_per3_dance.jpeg"
import bravegirlsloona_per3_d from "./images/bravegirlsloona_per3_dance.jpeg"
import vivizkep1er_per3_d from "./images/vivizkep1er_per3_dance.jpeg"

import wjsn_per3 from "./images/wjsn_per3.jpeg"
import viviz_per3 from "./images/viviz_per3.jpeg"
import ke1per_per3 from "./images/ke1per_per3.jpeg"

import hyolyn_per3 from "./images/comesoon.jpeg"
import loona_per3 from "./images/comesoon.jpeg"
import bravegirls_per3 from "./images/comesoon.jpeg"

const GroupAssets=[

    {
        name:"Hyolyn",
        imgURL:[hyolyn_per1,hyolyn_per2,hyolyn_per3],
        videoLink:["https://www.youtube.com/watch?v=2D2FoanXVL0","https://www.youtube.com/watch?v=BEZk9QVjA-s","#"]
    },
    {
        name:"Brave Girls",
        imgURL:[bravegirls_per1,bravegirls_per2,bravegirls_per3],
        videoLink:["https://www.youtube.com/watch?v=JfqGsj2FUBw","https://www.youtube.com/watch?v=jjjg8kUcl20","#"]
    },
    {
        name:"WJSN",
        imgURL:[wjsn_per1,wjsn_per2,wjsn_per3],
        videoLink:["https://www.youtube.com/watch?v=UITFHyWHS9Y","https://www.youtube.com/watch?v=9DBy1r7YMMg","https://www.youtube.com/watch?v=hDm0qLxZd9I"]
    },
    {
        name:"Loona",
        imgURL:[loona_per1,loona_per2,loona_per3],
        videoLink:["https://www.youtube.com/watch?v=87fKv045u5U","https://www.youtube.com/watch?v=ytuMObZlqOE","#"]
    },
    {
        name:"Viviz",
        imgURL:[viviz_per1,viviz_per2,viviz_per3],
        videoLink:["https://www.youtube.com/watch?v=rY8Gz8bBoR8","https://www.youtube.com/watch?v=NyjWRuazgsw","https://www.youtube.com/watch?v=XxDKzs5pT1E"]
    },
    {
        name:"Ke1per",
        imgURL:[ke1per_per1,ke1per_per2,ke1per_per3],
        videoLink:["https://www.youtube.com/watch?v=THiACt2pURE","https://www.youtube.com/watch?v=EzJfJhznH3s","https://www.youtube.com/watch?v=B2xLS0GVeNI"]
    }

]
const VocalGroupAssets=[
    {
        name:"Hyolyn+BraveGirls",
        imgURL:[hyolynbravegirls_per3_v],
        videoLink:["https://www.youtube.com/watch?v=qsCO_iifc30"]

    },
    {
        name:"WJSN+Viviz",
        imgURL:[wjsnviviz_per3_v],
        videoLink:["https://www.youtube.com/watch?v=Wm1quwZiefQ"]

    },
    {
        name:"Loona+Ke1per",
        imgURL:[loonakep1er_per3_v],
        videoLink:["https://www.youtube.com/watch?v=RkvoilXKGN4"]

    }
]
const DanceGroupAssets=[
    {
        name:"Hyolyn+WJSN",
        imgURL:[hyolynwjsn_per3_d],
        videoLink:["https://www.youtube.com/watch?v=AthYcVXwBAY"]

    },
    {
        name:"BraveGirls+Loona",
        imgURL:[bravegirlsloona_per3_d],
        videoLink:["https://www.youtube.com/watch?v=9nzIFQsUGVI"]

    },
    {
        name:"Viviz+Kep1er",
        imgURL:[vivizkep1er_per3_d],
        videoLink:["https://www.youtube.com/watch?v=rKRowS7eo1I"]

    }
]
export default GroupAssets;
export {VocalGroupAssets,DanceGroupAssets};