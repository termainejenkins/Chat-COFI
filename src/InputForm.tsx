// InputForm.tsx
import React from 'react';

interface InputFormProps {
    setSentence: React.Dispatch<React.SetStateAction<string>>;
    checkPangram: () => void;
}

function InputForm({ setSentence, checkPangram }: InputFormProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSentence(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        checkPangram();
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>CHAT-Pangram</h1>
                <label>
                    Enter a sentence:
                    <input type="text" onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Check Pangram</button>
            </div>
        </form>
    );
}

export default InputForm;
