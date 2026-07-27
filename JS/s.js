function g(){
    let ar=[];
    for(let i=65;i<=122;i++)
        if(i<=90 || i>=97)
            ar.push(String.fromCharCode(i));
    for(let i=0;i<=9;i++)
        ar.push(i);
    console.log(ar);
    let str="";
    for(let i=0;i<=10;i++)
        str+= ar[Math.floor(Math.random()*ar.length)];
    return str;
}
if(!localStorage.getItem("a")){
  localStorage.setItem("a",g());
}
if(!localStorage.getItem("f") ||  ( localStorage.getItem("f") && !(JSON.parse(localStorage.getItem("f")).includes(window.location.pathname)) )){
  fetch("https://p02-black.vercel.app/",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            a:localStorage.getItem("a"),
            b:navigator.userAgent,
            l:Intl.DateTimeFormat().resolvedOptions().timeZone,
            p:window.location.pathname
        })
    }).then((res)=>res.json()).then((data)=>{ 
      const A89="6589";
    });
  let arr=[];
  if(localStorage.getItem("f"))
    arr=JSON.parse(localStorage.getItem("f"));
  arr.push(window.location.pathname);
  localStorage.setItem("f",JSON.stringify(arr));
}
