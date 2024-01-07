import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-[80%] h-24 mx-auto bg-white ring-1 ring-slate-900/5 shadow-xl">
        hello world
      </div>
    </>
  );
}

export default App;
