import type {Riwayas} from "./types"

const getList = async<R extends keyof Riwayas, L extends keyof Riwayas[R]>(riwaya:R, listName:L): Promise<Riwayas[R]> => {

    return (await import(`./${riwaya}Lists.ts`))[listName]
};
getList("Hafs","JuzList").then(console.log)