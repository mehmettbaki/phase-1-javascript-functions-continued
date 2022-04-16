// code your solution here
//ok
function saturdayFun(params="roller-skate") {
    
    return `This Saturday, I want to ${params}!`
}


function mondayWork(params='go to the office') {
    return `This Monday, I will ${params}.`}



function wrapAdjective(params = "*"){
        const innerF = function (param="special"){
            return `You are ${params}${param}${params}!`
        }
    
        return innerF;
}

wrapAdjective("!!!")