const companies = [
   {
      name: "Company One",
      category: "Finance",
      start: 2000,
      end: 2007
   },
   {
      name: "Company Two",
      category: "Finance",
      start: 1980,
      end: 2007
   },
   {
      name: "Company Three",
      category: "Retail",
      start: 1997,
      end: 2007
   },
   {
      name: "Company Four",
      category: "Retail",
      start: 1991,
      end: 2007
   },
   {
      name: "Company Five",
      category: "Finance",
      start: 1995,
      end: 2007
   },
   {
      name: "Company Six",
      category: "Retail",
      start: 2000,
      end: 2007
   },
   {
      name: "Company Seven",
      category: "Finance",
      start: 1997,
      end: 2007
   },
   {
      name: "Company One",
      category: "Finance",
      start: 2000,
      end: 2007
   },

];

const ages = [33, 5, 56, 23, 55, 87, 13, 99, 57, 87, 53, 54];

// forEach
// filter
// map
// sort
// reduce

for (let i = 0; i < companies.length; i++) {
   console.log(companies[1]);
}
// better to use method below
companies.forEach((company) => {
   console.log(company);
});

// filter
let cantDrink = [];
for (let i = 0; i < ages.length; i++) {
   if (ages[i] > 18) {
      canDrink.push(ages[i]);
   }
}
// better to use method below
// get 18 and older
const canDrink = ages.filter(age => age > 18);
console.log(canDrink);

// Filter retail companies
const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

// get companies started sinse 1990 and less then 2000
const companiesStartedAfter1900 = companies.filter(company => (company.start > 1990 && company.start < 2000));
console.log(companiesStartedAfter1900);

// get companies lasted 10 years or more
const lastedTenYears = companies.filter(company => ((company.end - company.start) >= 10)
);
console.log(lastedTenYears);

// map => create a new array of companies names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

const agesSquare = ages.map(age => age * 2);
const agesSquare1 = ages.map(age => Math.sqrt(age));
console.log(agesSquare);
console.log(agesSquare1);

// sort companies from earliest start
const sortedCompanies = companies.sort((a, b) =>
   (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// sort ages from lowest to highest
const sortedAges = ages.sort((a, b) => a - b);
const sortedAges1 = ages.sort((a, b) => b - a);
console.log(sortedAges);
console.log(sortedAges1);

// reduce
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
   ageSum += ages[i];
}
console.log(ageSum);

// better to use method  below reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// get total years from all companies 
const companiesYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(companiesYears);



