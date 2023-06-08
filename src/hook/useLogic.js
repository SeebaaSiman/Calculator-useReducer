import { useReducer } from "react";
import reducer from "./reducer";
const initialState = {
 currentValue: "0",
 previousValue: null,
 operator: null,
};
export default function useLogic() {
 const [state, dispatch] = useReducer(reducer, initialState);

 const handleInputNumber = (value) => {
  dispatch({ type: "INPUT_NUMBER", payload: value });
 };

 const handleInputDecimal = () => {
  dispatch({ type: "INPUT_DECIMAL" });
 };

 const handleClear = () => {
  dispatch({ type: "CLEAR" });
 };

 const handleOperator = (value) => {
  dispatch({ type: "OPERATOR", payload: value });
 };

 const handleEquals = () => {
  dispatch({ type: "EQUALS" });
 };

 return { ...state, handleEquals, handleOperator, handleClear, handleInputDecimal, handleInputNumber }
}