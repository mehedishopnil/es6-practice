const person = { name: 'Mehedi hasan', age: 23, job: 'Graphic Design', Home: 'Satkhira'};

// const home = person.Home;
// const names = person.name;
const {job, Home} = person;
// console.log(home, names);
// console.log(home);

// console.log(job, Home);
// console.log(Home);

const friends = ['Mehedsi Hasan', 'Samanta Haider', 'Labonno Parvin', ];

const [firstname, ...restName] = friends;

const complexFunction = {
    name: 'Mehedi Hasan',
    info: {
        address: 'Bharasimla, Kaligonj, Satkhira',
        phoneNumber: +8801316265634
    }
}

const {address, phoneNumber} = complexFunction.info;
console.log('address: ', address,  'Phone Number: ', phoneNumber); 