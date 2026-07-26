if(!localStorage.getItem("f") ||  ( localStorage.getItem("f") && !(JSON.parse(localStorage.getItem("f")).includes(window.location.pathname)) )){
  fetch("https://p02-black.vercel.app/",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
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
