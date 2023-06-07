const timers = process.argv.slice(2);
if (timers === 0 || timers[0] <= 0) {
  return false;
}
const timing = (num) => {
   num = Number(num);
for (let n of timers) {
setTimeout(() => {
  console.log(`${n}second is done`);
  process.stdout.write('\x07');
}, n * 1000);
}
};
timing();