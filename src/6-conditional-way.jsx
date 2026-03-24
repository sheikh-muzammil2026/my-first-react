// conditional way-2 with default para value

// export default function Condition({salary, decision, duration = 0}) {
//     if(salary === 30000){
//         return <li>Maktab : {decision}</li>;
//     }else {
//        return <li>Maktab : {decision} till {duration} months</li>;
//     }

// }


// conditional rendering Way-3 with Ternary Operator

// export default function Condition({salary, decision, duration = 0}) {
//    return  salary === 30000 ?  <li>Maktab  {decision}</li> : <li>Maktab {decision} till {duration} months</li>;

// }


// conditional rendering Way-4 with && (শর্ত পাওয়া গেলে রিজাল্ট, না পেলে কিছুই না)

// export default function Condition({salary, decision, duration = 0}) {
//    return  salary === 30000 &&  <li>Maktab  {decision}</li> ;

// }

// conditional rendering Way-5 with || (শর্ত ম্যাচ না হলে  রিজাল্ট দেখাও ,  ম্যাচ হলে কিছুই না)

export default function Condition({salary, decision, duration = 0, isDone}) {
   return  isDone ||  <li>Maktab  {decision} till {duration} months</li> ;

}