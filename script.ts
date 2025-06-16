function getFirstElement<ElementType>(array: ElementType[]){
    return array[0]
}
const numbers = [1, 2, 3]
const firstNum = getFirstElement<number>(numbers)

const strings = ["sdf", "sdf"]
const firstStrings = getFirstElement(strings)
//whenever you have a type that needs to conform to the data
//been passed in or the data been returned or just used someway
//in that function, you need to use a generic type
const input = document.querySelector<HTMLInputElement>(".input")
input?.value

const a = [1, 2, 3]
a.map(() => {
    return ""
})

const map = new Map<string, number>()
map.set("sdf", 3)

type ApiResponse<Data = {status : number}> = {
    data: Data
    isError: boolean
}
type UserResponse = ApiResponse<{ name: string; age: number}>
type BlogResponse = ApiResponse<{ title: string }>
type StatusResponse = ApiResponse<{ status: number }>
const response: UserResponse = {
    data: {
        name: "Kyle",
        age: 28
    },
    isError: false
}
const responseBlog: BlogResponse = {
    data: {
        title:"sdf"
    },
    isError: false
}
const apiresponse: ApiResponse = {
    data: {
      status : 200
    },
    isError: false
}
// a type that they must adhere to
const mustapiresponse: ApiResponse<string> = {
    data: "damdaves",
    isError: false
}