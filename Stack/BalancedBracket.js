const balancedBracket = (string) => {
    let stack = [];
    for (let char of string) {
        if (char === '(' || char === '{' || char === '[')
            stack.push(char);
        else if (char === ')' || char === '}' || char === ']') {
            if ((char === ')' && stack[stack.length - 1] === '(') ||
                (char === '}' && stack[stack.length - 1] === '{') ||
                (char === ']' && stack[stack.length - 1] === '['))
                stack.pop()
            else return false
        }

    }
    return stack.length === 0
}

console.log(balancedBracket('(hello)[world]'));
console.log(balancedBracket('([)]'));
console.log(balancedBracket('[({}{}{})([])]'));