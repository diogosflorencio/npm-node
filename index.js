import moment from 'moment';
import dayjs from 'dayjs';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

console.log(dayjs().format())

var name = "Bob", time = "today";  
console.log(`Hello ${name}, how are you ${time}?`);