// code your solution here
//ok
function saturdayFun(params="roller-skate") {
    
    return `This Saturday, I want to ${params}!`
}


function mondayWork(params='go to the office') {
    return `This Monday, I will ${params}.`}



function wrapAdjective(paramout = "*"){
        return function (paramin="special"){
            return `You are ${paramout}${paramin}${paramout}!`
        }
}

console.log(wrapAdjective("!!!"))