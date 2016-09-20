export interface DummyState {
    junk: string;
}

export const reducer = (state, action) => {
    return {
        junk: action.junk
    }
};