import useLogic from "../hook/useLogic";

export const Calculator = () => {
  const {
    previousValue,
    operator,
    currentValue,
    handleEquals,
    handleOperator,
    handleClear,
    handleInputDecimal,
    handleInputNumber,
  } = useLogic();

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          name="screen"
          id="screen"
          disabled
          value={
            operator
              ? `${previousValue} ${operator} ${currentValue}`
              : currentValue
          }
        />
        <div>
          <button className="equals red" onClick={handleClear}>
            AC
          </button>

          <button className="color" onClick={() => handleOperator("%")}>
            %
          </button>
          <button className="color" onClick={() => handleOperator("/")}>
            /
          </button>
          <button onClick={() => handleInputNumber("7")}>7</button>
          <button onClick={() => handleInputNumber("8")}>8</button>
          <button onClick={() => handleInputNumber("9")}>9</button>
          <button className="color" onClick={() => handleOperator("x")}>
            x
          </button>
          <button onClick={() => handleInputNumber("4")}>4</button>
          <button onClick={() => handleInputNumber("5")}>5</button>
          <button onClick={() => handleInputNumber("6")}>6</button>
          <button className="color" onClick={() => handleOperator("-")}>
            -
          </button>
          <button onClick={() => handleInputNumber("1")}>1</button>
          <button onClick={() => handleInputNumber("2")}>2</button>
          <button onClick={() => handleInputNumber("3")}>3</button>
          <button className="color" onClick={() => handleOperator("+")}>
            +
          </button>
          <button onClick={() => handleInputNumber("0")} className="zero">
            0
          </button>
          <button className="color" onClick={() => handleInputDecimal()}>
            .
          </button>
          <button className="equals color" onClick={() => handleEquals()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};
