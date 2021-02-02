const range = (min: number, max: number, isInteger = true)  : number => isInteger ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min) + min
const id    = ()                                            : string => Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16)
const color = ()                                            : string => `hsl(${Math.floor(Math.random() * 360)}, 50%, 40%)`

export default { range, id, color }