import { atom } from 'recoil';
import { counterNamespace } from '../../constants';

export const counterState = atom({
    key: counterNamespace + 'counterState2',
    default: { count: 0 },
});