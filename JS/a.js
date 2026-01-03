let s="",blabla="";
let ar=[];
for(let i=0;i<4;i++){    
    ar.push(document.createElement("div"));
    ar[i].onclick=function(){
        document.getElementsByTagName("body")[0].style.opacity=".5";
        setTimeout(function(){document.getElementsByTagName("body")[0].style.opacity="1";},250);
        s+=["a","y","b","z"][i];
        if(s == blabla){
            haha("lmth65JH3PJ22xAcV4b6JHpG2Ne3NtCkQ4dPx3bxBYiORO4AvQ1fFo83vv7vaeSZX3ykyUD".replace("65JH3PJ22",".JH3PJ22").split("").reverse().join(""));
            s="";
        }
        if(s.length > 65)
            s="";
    };
    document.body.appendChild(ar[i]);
}
let o=0;
for(let i=0;i<2;i++)
    for(let j=0;j<2;j++)
        ar[o++].style=`width:50%;height:50%;position:absolute;background-color:transparent;left:${j*50}%;top:${i*50}%;`;
function haha(n){open(`${n}`,"_self");}
document.body.onload=function(){
    setTimeout(function(){document.querySelector('div#A>div:nth-child(2)').style='transition-delay: 0s;';},2000);
    document.getElementById('A').style='color:white;z-index: 89906566;';
    let ns="";
    document.querySelector("div#A").style.zIndex.split("").forEach(v => {
        ns+=v;
        if(ns.length==2){
            blabla+=String.fromCharCode((parseInt(ns)+32));
            ns="";
        }
    });
    document.querySelector("div#A").onclick=function(){
        s="";
    };
};
document.querySelector("footer").innerHTML+=`
    <div>For contact <a href="mailto:${"%^fuo.buoya.tcatnoc".replace("^","@").replace("%","moc.liamg").split("").reverse().join("")}">${"%^fuo.buoya.tcatnoc".replace("^","@").replace("%","moc.liamg").split("").reverse().join("")}</a></div>
`;
