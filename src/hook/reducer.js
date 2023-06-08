export default function reducer(state, action) {
 const { currentValue, previousValue, operator } = state;
 const current = parseFloat(currentValue);
 const previous = parseFloat(previousValue);
 switch (action.type) {
  case "INPUT_NUMBER":
   if (state.operator) {
    return {
     ...state,
     currentValue: state.currentValue + action.payload,
    };
   } else if (state.currentValue === "0") {
    return {
     ...state,
     currentValue: action.payload,
    };
   } else {
    return {
     ...state,
     currentValue: state.currentValue + action.payload,
    };
   }
  case "INPUT_DECIMAL":
   if (state.currentValue.includes(".")) {
    return state;
   } else {
    return {
     ...state,
     currentValue: state.currentValue + ".",
    };
   }
  case "CLEAR":
   return {
    ...state,
    currentValue: "0",
    previousValue: null,
    operator: null,
   };
  case "OPERATOR":
   return {
    ...state,
    operator: action.payload,
    previousValue: state.currentValue,
    currentValue: "",
   };
  case "EQUALS":

   if (operator === "+") {
    return {
     ...state,
     currentValue: (previous + current).toString(),
     operator: null,
     previousValue: null,
    };
   }

   if (operator === "-") {
    return {
     ...state,
     currentValue: (previous - current).toString(),
     operator: null,
     previousValue: null,
    };
   }

   if (operator === "x") {
    return {
     ...state,
     currentValue: (previous * current).toString(),
     operator: null,
     previousValue: null,
    };
   }

   if (operator === "/") {
    return {
     ...state,
     currentValue: (previous / current).toString(),
     operator: null,
     previousValue: null,
    };
   }
   if (operator === "%") {
    const percentValue = (previous / 100) * current;
    return {
     ...state,
     currentValue: percentValue.toString(),
     operator: null,
     previousValue: null,
    };
   }
   return state;
  default:
   return state;
 }
}