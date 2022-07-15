fetch("http://localhost:3306/data", { 
    credentials: 'include'})
    .then(res => res.json())
    .then(data => console.log(data))