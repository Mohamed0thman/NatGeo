// function time_convert(num: any) {
//   var s,
//     m,
//     h,
//     m,
//     d,
//     s: any = Math.floor(num / 1000);
//   m = Math.floor(s / 60);
//   s = s % 60;
//   h = Math.floor(m / 60);
//   m = m % 60;
//   d = Math.floor(h / 24);
//   h = h % 24;
//   d = d % 24;
//   return { d: d, h: h, m: m, s: s };
// }

// let interval: any;
// const startTimer = () => {
//   const countDownDate = new Date(time).getTime();

//   interval = setInterval(() => {
//     const now: number = new Date().getTime();

//     const distance: number = countDownDate - now;

//     const hours: number = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes: number = Math.floor(
//       (distance % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);
//     if (distance < 0) {
//       clearInterval(interval);
//     } else {
//       setTimerHours(hours);
//       setTimerMinutes(minutes);
//       setTimerSeconds(seconds);
//     }

//     setLoading(true);
//     if (seconds < 0 || (hours === 0 && minutes < 30 && seconds >= 0)) {
//       setHalfHour(true);
//     }

//     if (hours === 0 && minutes < 5 && seconds >= 0) {
//       setShouldRedirect(true);
//       setDirectedTo("/welcome");
//     }
//     if (seconds < 0) {
//       setShouldRedirect(true);
//       setDirectedTo("/film");
//     }
//   }, 1000);
// };

// useEffect(() => {
//   startTimer();
//   return () => {
//     clearInterval(interval);
//   };
// });

// console.log(time);

// function TimeConvert(num: any) {
//   var s,
//     m,
//     h,
//     m,
//     d,
//     s: any = Math.floor(num / 1000);
//   m = Math.floor(s / 60);
//   s = s % 60;
//   h = Math.floor(m / 60);
//   m = m % 60;
//   d = Math.floor(h / 24);
//   h = h % 24;
//   d = d % 24;

//   console.log(s);
//   console.log(h);
//   console.log(m);

//   setTimerHours(h);
//   setTimerMinutes(m);
//   setTimerSeconds(s);

//   setLoading(true);
//   if (s < 0 || (h === 0 && m < 30 && s >= 0)) {
//     setHalfHour(true);
//   }

//   if (h === 0 && m < 5 && s >= 0) {
//     setShouldRedirect(true);
//     setDirectedTo("/welcome");
//   }
//   if (s < 0) {
//     setShouldRedirect(true);
//     setDirectedTo("/film");
//   }
// }
// useEffect(() => {
//   TimeConvert(time);
// }, [time]);
