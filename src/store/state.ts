import { atom } from "recoil";


export const userAtom = atom({
    key: "userAtom",
    default: {} as Record<string, string | number>
})

export const aiAtom = atom({
    key: 'aiAtom',
    default: {} as Record<string, string | number>
})


export const todoAtom = atom({
    key: 'todos',
    default: [] as Array<Record<string, string | number>>
})

export const aiMsgAtom = atom({
    key: 'aiMsg',
    default: [] as string[] // Specify default type as string array
});

export const hideSkeleton = atom({
    key: 'hide',
    default: false
})