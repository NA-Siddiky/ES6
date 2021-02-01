const ages = [12, 11, 5, 15, 10];
const ages2 = [1, 2, 3, 4];
const ages3 = [101, 102, 104];
const allAges = ages.concat(ages2).concat([5005]).concat(ages3);
// const allAges2 = [ages, ages2, 50005, ages3];
const allAges2 = [...ages, ...ages2, 50005, ...ages3];
// console.log(allAges2);


const businessMan = 600;
const minister = 400;
const amla = 300;
const maximum = Math.max(businessMan, minister, amla);
// console.log(maximum);
const bigger = [500, 300, 100];
const maximum2 = Math.max(...bigger);
console.log(maximum2);