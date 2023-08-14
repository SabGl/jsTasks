//Ввод числового значения.
//функция запрашивает число до тех пор пока мы его не введем

const needNumber = () => {
    let num;

    do{
        num = prompt("Введите число, пожалуйста", 0)
    } while(!isFinite(num))
    if(num === null || num ===''){
        return null
    }
    return +num
}

alert(`Ваше число: ${needNumber()}`);