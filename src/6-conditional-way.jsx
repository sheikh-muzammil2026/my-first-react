// conditional way-2 with default para value

// export default function Condition({salary, decision, duration = 0}) {
//     if(salary === 30000){
//         return <li>Maktab : {decision}</li>;
//     }else {
//        return <li>Maktab : {decision} till {duration} months</li>;
//     }

// }


// conditional rendering Way-3 with Ternary Operator

export default function Condition({salary, decision, duration = 0}) {
   return  salary === 30000 ?  <li>Maktab  {decision}</li> : <li>Maktab {decision} till {duration} months</li>;

}


// conditional rendering Way-4 with &&

// conditional rendering Way-5 with ||