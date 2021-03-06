/**
 * Immer takes a state, and runs a function against it.
 * That function can freely mutate the state, as it will create copies-on-write.
 * This means that the original state will stay unchanged, and once the function finishes, the modified state is returned
 * 
 * @param currentState - the state to start with
 * @param thunk - function that receives a proxy of the current state as first argument and which can be freely modified
 * @returns The next state: a new state, or the current state if nothing was modified
 */
export function immer<S = any>(currentState: S, thunk: (draftState: S) => void): S;
