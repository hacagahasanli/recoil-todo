import { selector } from "recoil";
import { counterState } from "../atoms";

const namespace = "selectorsCount/"

export const charCountState = selector({
    key: namespace + 'charCountState2',
    get: ({ get }) => {
        const number = get(counterState);

        return number.count
    },
})