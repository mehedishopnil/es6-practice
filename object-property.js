const students = [
    {id:202002070, name: "Mehedi Hasan"},
    {id:202002069, name: "Jalal Hossain"},
    {id:202002056, name: "Subrato basak"},
];

const nams = students.map(s => s.name);
const ids = students.map(s => s.id);
console.log(nams,ids);