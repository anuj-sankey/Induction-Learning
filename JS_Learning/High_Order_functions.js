//ForEach
//Filter
//Map
//Sort
//Reduce

const companies = [
    {name: "Google", category:"Product Based", start: 1991, end: 2004},
    {name: "MicroSoft", category:"Product Based", start: 1982, end: 2008},
    {name: "Apple", category:"Product Based", start: 2000, end: 2090},
    {name: "TCS", category:"Service Based", start: 1991, end: 2004},
];

//Method 1
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i].name);
// }

//Method 2
// companies.forEach(function(company , index){
//     console.log(index)
// })

//Arrow Function 
companies.forEach((company, index) => {
    console.log(company.name)
});