const namespace = `atoms/`;
import { atom } from 'recoil';

export const counterState = atom({
    key: namespace + 'counterState2',
    default: { count: 0 },
});