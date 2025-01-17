import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App_warmingUp() {
  // return (
  //   <div>
  //     <h1 className={styles.title}>Welcome back!</h1>
  //     <Button text={"Continue"} color={"white"} backgroundColor={"tomato"}/>
  //   </div>
  // );

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // console.log("Always called...");

  /* Function 선언 방법 두가지
  function fn() {
    console.log("Function!"); 
  }

  const sameFn = () => {
    console.log("Same Function!");
  }

  fn();
  sameFn();
  */

  /* Function 선언 방법 두가지 ver2
  
  useEffect(() => {
    console.log("Hi ~ ");
    return () => console.log("Bye !");
  }, []);

  useEffect(function () {
    console.log("Hi ~");

    return function() {
      console.log("Bye !");
    };
  }, []);

  */

  
  /*
  const iRunOnlyOnce = () => {
    console.log("call API");
  };
  useEffect(iRunOnlyOnce, []);
  */
  useEffect(() => {
    // Run when First time.
    // console.log("Call the API ...");
  }, []);

  useEffect(() => {
    // Run when 'keyword' changes.
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR " + keyword);
      console.log("Counter : " + counter);
    }
  }, [keyword, counter]);

  function Hello() {
    useEffect(() => {
      console.log("created :)");
      return () => console.log("destroyed :(");
    }, []);

    return <h1>Hello</h1>;
  }

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);

  return (
    <div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      </div>
      
{/*       
      <h2/>
      <input 
        value={keyword}
        type="text" 
        placeholder="Search here..." 
        onChange={onChange} 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button> */}
    </div>
  )
}

export default App_warmingUp;