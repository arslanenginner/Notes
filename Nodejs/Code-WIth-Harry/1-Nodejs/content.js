export const a=1
export const b=2
export const c=3
export const d=4

let obj; //obj can be exported in two ways

// export default obj={
//     a:5,
//     b:6
// } 
obj={
    a:5,
    b:6
}
export default obj;     // default export can be imported by anyname