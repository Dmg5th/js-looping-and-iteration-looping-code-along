function writeCards(names, event){
    let newarr = [];
    for (let i = 0; i < names.length; i++)
    newarr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    return newarr
}

function countDown(integer){
    while (0 <= integer){
        console.log(integer)
        integer -= 1;
    }
}
