fetch("http://localhost:3306/data", { 
    method: "PUT",
    method: "POST",
    method: "DELETE",
    method: "GET",
    credentials: 'include'})
    .then(res => res.json())
    .then(data => console.log(data))