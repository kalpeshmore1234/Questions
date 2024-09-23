import data from './data'
import Questions from './Questions';
import { useState } from 'react';

const App = () => {
  
  const [questions, setQuestions] = useState(data)
  
  
  return <main>
     <Questions questions={questions} />
  </main>;
};
export default App;
