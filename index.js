const _=require('lodash')
let array=[1,2,3,4]

_.each(array,elem=>{
    console.log(elem+"I am changed from develop branch")
    console.log("next change")
})
