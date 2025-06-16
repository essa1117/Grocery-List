import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// const items = ["GLA", "China", "USA", "Russia", "Issa"];
// const handleSelectItem = (item: string) => {
//   console.log(item);
// };
//let colors = ["Red", "green", "blue"];
//const types = ["success", "primary", "secondary", "danger", "warning", "info"];
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const show = () => {
    setAlertVisible(true);
  };
  const hide = () => {
    setAlertVisible(false);
  };
  return (
    <>
      {alertVisible && (
        <Alert>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            onClick={hide}
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </Alert>
      )}
      <Button type="primary" onclick={show} />
      {/* <Alert>
        Issa i am issa <span>essa</span>
      </Alert> */}
    </>
  );
}

export default App;
