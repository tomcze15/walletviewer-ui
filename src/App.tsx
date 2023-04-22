import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <div className="text-xs font-bold underline lg:text-3xl">
      Hello world
      <button type="button" className="rounded-lg hover:bg-violet-700">
        Click me
      </button>
    </div>
  );
}

export default App;
