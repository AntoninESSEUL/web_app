import "./globals.css";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <>
      <div className="card">
        {/* Utilisation correcte du composant Button_UI */}
        <Button color="blue" size="lg" onClick={() => console.log("clicked")}>
          Button
        </Button>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
