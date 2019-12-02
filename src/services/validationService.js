
const validatePath = (path) => {
    const reg = /((\/)(\w+))|((?:[a-zA-Z]|\\\\[\w]+\\[\w.$]+)\\(?:[\w]+\\)*\w([\w.])+)/g;
    const isPath = reg.text(path);
    if(!isPath) return "The path is incorrect";
}

export {
    validatePath
}