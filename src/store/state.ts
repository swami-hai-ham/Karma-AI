import { atom } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {}
})

export const aiAtom = atom({
    key: 'aiAtom',
    default: {}
})


export const todoAtom = atom({
    key: 'todos',
    default: []
})

export const aiMsgAtom = atom({
    key: 'aiMsg',
    default: []
})

export const hideSkeleton = atom({
    key: 'hide',
    default: true
})