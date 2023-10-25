import { useState } from 'react';
import './App.css';
import SearchByQuery from './components/SearchByQuery';
import SearchById from './components/SearchById';

type QueryOptions = "query" | "id" | ""

function App() {
  const [queryType, setQueryType] = useState<QueryOptions>("")

  return (
    <div className="App">
      <h1>How do you want to search?</h1>
      <div>
        <select value={queryType} onChange={e => setQueryType((e.target as HTMLSelectElement).value as QueryOptions)}>
          <option value=""></option>
          <option value="query">By Query</option>
          <option value="id">By Category and ID</option>
        </select>
      </div>

      {queryType === "query" &&
        <SearchByQuery />}
      {queryType === "id" && <SearchById />}

    </div>
  );
}

export default App;
