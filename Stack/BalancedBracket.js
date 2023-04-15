function balancedBracket(string) {
    let stack = [];
    for (let char of string) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        }
        else if (char === '}' || char === ']' || char === ')') {
            if ((char === '}' && stack[stack.length - 1] === '{') ||
                (char === ']' && stack[stack.length - 1] === '[') ||
                (char === ')' && stack[stack.length - 1] === '(')) {
                stack.pop();
            } else {
                return false
            }
        }

    }
    return stack.length === 0;
}

console.log(balancedBracket('(hello)[world]'))
// => true

console.log(balancedBracket('([)]'))
// => false

console.log(balancedBracket('[({}{}{})([])]'))
// => true


// For each character in the string, if it is an opening bracket(i.e., one of the characters[{ (),
//     you push it onto the stack.If it is a closing bracket(i.e., one of the characters ] })),
//     you check if the top of the stack contains the corresponding opening bracket.If it does,
//         you pop the opening bracket from the stack and continue iterating through the string.
//     If the stack is empty when you finish iterating through the string, then all the brackets have been balanced,
//     and you can return true.Otherwise, some brackets are unbalanced, and you return false.