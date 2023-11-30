// App.tsx
import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';
import { pangramCheck } from './PangramUtils'; // Importing the pangramCheck function

function App() {
    const [sentence, setSentence] = useState('');
    const [isPangram, setIsPangram] = useState(false);

    const checkPangram = () => {
        // Use the pangramCheck function to determine if the sentence is a pangram
        setIsPangram(pangramCheck(sentence));
    };

    return (
        <div>
            <h1> COFI</h1>
            <button type="submit">Chat-COFI</button>
            <button type="submit">Pangrams</button>
            <button type="submit">Jira</button>
            <button type="submit">Trello</button>
            <InputForm setSentence={setSentence} checkPangram={checkPangram} />
            <Result isPangram={isPangram} />
        </div>
    );
}

export default App;
