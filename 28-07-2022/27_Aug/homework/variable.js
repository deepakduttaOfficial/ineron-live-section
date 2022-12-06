// let fevNumber = 7;
// let name = "Deepak";
// let isLogin = true;
// var unKnown;
// var empty = null;

// console.log({
//   fevNumber,
//   name,
//   isLogin,
//   unKnown,
//   empty,
// });

// const firstName = "Deepak";
// const lastName = "Dutta";
// const country = "India";
// const age = 19;
// console.log(
//   `My name is ${firstName} ${lastName} . I am from ${country} and i am ${age} year old`
// );

// let value = "Deepak Dutta";
// let modifyValue = value.toUpperCase();
// console.log(modifyValue);

// let a = "This is a paragraph";
// console.log(a.includes("paragraph")); // true
// console.log(a.includes("A")); // false

// const favTeacher = "Hitesh";
// console.log(favTeacher.split("")); // result: [ 'H', 'i', 't', 'e', 's', 'h' ]

// const companyName = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companyName.split(""));

// let myCountry = "India";
// console.log(myCountry.lastIndexOf("a"));

// let position =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(position.indexOf("because"));

// let removeSpace = " Good morning ";
// console.log(removeSpace.trim());

//   console.log(1 == true); // Truthy value
//   console.log(0 == false); // Truthy value
//   console.log(null == undefined); // Truthy value
//   console.log([] == []); // Falsy value
//   console.log({} == {}); // Falsy value
//   console.log(1 === true); // Falsy value

// console.log(4 > 3); //true
// console.log(4 >= 3); //true
// console.log(4 < 3); //false
// console.log(4 <= 3); //false
// console.log(4 == 4); //true
// console.log(4 === 4); //true
// console.log(4 != 4); //false
// console.log(4 !== 4); //fasle
// console.log(4 != "4"); //fasle
// console.log(4 == "4"); //true
// console.log(4 === "4"); //flase
// {
//   let value1 = "python";
//   let value2 = "jargon";
//   console.log(value1.length !== value2.length);
// }

// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDate());
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());

// {
//   let getYear = new Date().getFullYear() - 1970;
//   let getMonth = new Date().getMonth();
//   let getHours = new Date().getHours();
//   let getMinutes = new Date().getMinutes();
//   let totalSec =
//     getYear * 31536000 + getMonth * 2628288 + getHours * 3600 + getMinutes * 60;
//   console.log(totalSec);
// }

// const baseValue = prompt("Enter the base of a triangle: ");
// const heightValue = prompt("Enter the height of a triangle: ");
// // calculate the area
// const areaValue = (baseValue * heightValue) / 2;
// console.log(`The area of the triangle is ${areaValue}`);

// let point1 = [2, 2];
// let point2 = [6, 10];
// let x1 = point1[0];
// let y1 = point1[1];
// let x2 = point2[0];
// let y2 = point2[1];
// m = (y2 - y1) / (x2 - x1);
// console.log(m);

// console.log(new Date().toLocaleDateString());
// console.log(new Date().toISOString());
// console.log(new Date().toTimeString());

// let age = prompt("Enter your age: ");
// if (parseInt(age) >= 18) {
//   alert("You are old enough to drive");
// } else {
//   let driveAge = 18 - age;
//   alert(`You are ${driveAge} years away from turning 18 to drive`);
// }

// let number = prompt("Tell me the number: ");
// if (number % 2 === 0) {
//   alert(`${number} is a even number`);
// } else {
//   alert(`${number} is a odd number`);
// }

// let grade = 88;
// if (grade <= 49) {
//   console.log("Grade-F");
// } else if (grade <= 59) {
//   console.log("Grade-D");
// } else if (grade <= 69) {
//   console.log("Grade-C");
// } else if (grade <= 79) {
//   console.log("Grade-B");
// } else if (grade <= 100) {
//   console.log("Grade-A");
// }

// let season = "aUtumn".toLocaleLowerCase();
// switch (season) {
//   case "autumn":
//     console.log(`September, October or November, the season is Autumn.`);
//     break;
//   case "winter":
//     console.log(`December, January or February, the season is Winter.`);
//     break;
//   case "spring":
//     console.log(`March, April or May, the season is Spring`);
//     break;
//   case "summer":
//     console.log(`June, July or August, the season is Summer`);
//     break;
//   default:
//     console.log("Enter valid season");
//     break;
// }

// var getDaysInMonth = function (month) {
//   return new Date(2022, month, 0).getDate();
// };
// console.log(getDaysInMonth(1));
// console.log(getDaysInMonth(5));

// let year = 3000;
// if (year % 4 === 0) {
//   console.log("leap year");
// } else {
//   console.log("normal year");
// }

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// shoppingCart.unshift("Meat");
// shoppingCart.push("Sugar");
// shoppingCart.splice(4, 1);
// shoppingCart[3] = "Green Tea";
// console.log(shoppingCart);

// const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Ethiopia"];
// if (countries.includes("Ethiopia")) {
//   console.log("ETHIOPIA");
// } else {
//   countries.push("Ethiopia");
//   console.log(countries);
// }

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let minAge = ages.sort()[0];
// let maxAge = ages.sort()[ages.length - 1];
// let medianAge = ages.sort()[Math.round((ages.length - 1) / 2)];
// // Avareage
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }
// let averageAge = sum / ages.length;
// console.log(Math.round(averageAge));
// console.log(Math.round(Math.abs(minAge - averageAge)));
// console.log(Math.round(Math.abs(maxAge - averageAge)));

// for (let i = 2; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let even = 0;
// let odd = 0;
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log({ even, odd });

// console.log(Math.round(Math.random() * 10000000000000000));

const countryList = [
  "landfff",
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];
// countryList.forEach((e) => {
//   console.log(e.replace("land", ""));
// });

// let lengthOfChar = [];
// countryList.forEach((e) => {
//   lengthOfChar.push(e.length);
// });
// let maxLength = Math.max(...lengthOfChar);
// let hightestNumberOfChar;
// countryList.forEach((e) => {
//   if (e.length === maxLength) {
//     hightestNumberOfChar = e;
//   }
// });
// console.log(hightestNumberOfChar);
