function login(callback){
    console.log("user logging in ...")
    setTimeout(function() {
        console.log("login Successful")
        callback();
    },2000);
}

function Dashboard(){
    console.log("Dashboard Loading....")
    fetchdata();
}
async function fetchdata(){
    console.log("fetching data .....")
    const response= await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json();

    console.log('Data Fetched');
    console.log(data);
}

login(Dashboard);


//in the above code:
//login function is called which as a callback function, the when the login function is triggered after the specified delay the callback function gets called.
// in the above the callback function is dashboard , when this function is triggered it again calls the function defined inside it 
// now when the dashboard call the featchdata function, it triggers the fetch operation inside it , the value fetched is stored inside the response
//the await function is used before fetch is to wait until the operatiom is finished orelse the response is not assigned to any value at the execution time
// this goes same to the 'data' aslo
//if we displayed the data without the await function the data will not be fetched when the time of execution so await is used in 'data'