// Result.tsx
import React from 'react';

interface ResultProps {
    isPangram: boolean;
}

function Result({ isPangram }: ResultProps) {
    return <div>{isPangram ? 'The sentence is a pangram!' : 'Not a pangram.'}</div>;
}

export default Result;
