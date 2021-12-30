
class Account{
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }

    //class methods or member function
    getbalance(){
        return `Your current balance is: ₹${this.balance}`
    }
    withdaraw(amount){
        if(amount<=this.balance){
            this.balance=this.balance-amount;
            return `Your last withdarw amount is:${amount}.
             ${this.getbalance()}`;
        }
        else{

        return `Insufficient balance.your current balance is ${this.getbalance()}`;
        }
    
    };
    Deposit(amount){
        this.balance=this.balance+amount;
        return this.getbalance();
    }
}

const musthafa= new Account("mohamed musthafa",3245,2000);
const vani= new Account("vani",3246,200000);
const ragav_kumar= new Account("ragav_kumar",3247,10000);
console.log(musthafa);

// encapsulation
console.log(musthafa.getbalance())
console.log(vani.withdaraw(50000));
console.log(musthafa.Deposit(55000));
console.log(musthafa.getbalance())








const getCountries=()=>{
    // console.log("")
    //creating the request
    const xhr =new XMLHttpRequest();
    //reading the data
    //method,url
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send(); //send

    xhr.responseType = "json"; //data Format

    //after getting the response,whta should we do?- print on console
    xhr.onload =()=>{
        const Countries =xhr.response;
        const countryname=Countries.map((details)=>details.name.common);
        const highpopulation=Countries.filter((details)=>details.population>10000000).map((details)=>details.name.common);
        // const Spanish=Countries.filter((details)=>details.languages.spa=="Spanish");



        console.log("Full data",Countries)
        console.log(countryname)
        console.log(highpopulation);
        // console.log(Spanish);
    };
};

getCountries();

//transform- map
//array of object -> array of strings



// Countries.map((x)=>x.name)


// / Find all countries that speak spanish
// // Expected output
// // ["spain", "mexico"...]

// // Find all countries names with more than 1_00_00_000 population
// // ["India", "China", "RUSSIA"]

// // Task - deposit
