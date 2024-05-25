
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();


export const cartAtom = atom({
  key: 'CartAtom',
  default: [],
  persist: [""],
  effects_UNSTABLE: [persistAtom],
 

});
