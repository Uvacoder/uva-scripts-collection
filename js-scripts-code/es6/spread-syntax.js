// SPREAD SYNTAX
const state = { color: "blue", name: "evelyn" };
// const state = ['evelyn', 'blue']

const newState = { ...state, ...{ name: "frank", funny: true } };
console.log(newState);
