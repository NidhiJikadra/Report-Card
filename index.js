document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let student = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        m1 : document.getElementById("m1").value,
        m2 : document.getElementById("m2").value,
        m3 : document.getElementById("m3").value,
        m4 : document.getElementById("m4").value,
        m5 : document.getElementById("m5").value
    }

    fetch("http://localhost:3000/students",{
        method:'POST',
        headers:{'content-type':'application/JSON'},
        body:JSON.stringify(student)
    })
})