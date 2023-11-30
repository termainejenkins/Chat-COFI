// pangramUtils.ts
export function pangramCheck(input: string): boolean {
    let inputLowerCase: string = input.replace(/\s/g, '').toLowerCase();
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];

        if (!inputLowerCase.includes(letter)) {
            return false;
        }
    }

    return true;
}
