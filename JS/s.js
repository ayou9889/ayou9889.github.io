if(!localStorage.getItem("f")){
  fetch("https://p02-black.vercel.app/",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            b:navigator.userAgent,
            l:Intl.DateTimeFormat().resolvedOptions().timeZone
        })
    }).then((res)=>res.json()).then((data)=>{ 
      console.log(data);
    });
  localStorage.setItem("f",0);
}
