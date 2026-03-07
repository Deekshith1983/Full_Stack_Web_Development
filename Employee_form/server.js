const express=require('express');
const fs = require('fs');
const app=express();
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files
const PORT=3000;

app.post("/saveEmployee", (req, res) => {
    const newEmployee=req.body;//req.body to get data from client from html form
    console.log('Received employee data:', newEmployee);
    fs.readFile('employee.json', "utf8", (err, data) => {
        let employees=[]
        if(!err&&data){
            employees=JSON.parse(data);
        }
        employees.push(newEmployee);
        fs.writeFile('employee.json', JSON.stringify(employees,null,2), (err) => {
            if(err){
                res.status(500).send("error saving employee data");
            }else{
                res.status(200).send("employee data saved successfully");
            }
        });
    });
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
