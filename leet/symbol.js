const id = Symbol('id')
const user = {
    [id]: 1,
    name: 'Alex'
}
const userInfo = {
    id: 2,
    age: 30
}
const updatedUser = {
    ...user,
    ...userInfo
}
console.log('updatedUser', updatedUser)