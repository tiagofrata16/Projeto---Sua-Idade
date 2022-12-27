function idade(dia, mes, ano) {
    return function(dAgora, mAgora, aAgora) {
        const id = aAgora - ano
        if (mAgora < mes) {
            id1 = id - 1
            return id1
        } else if (mAgora > mes) {
            return id
        } else if (mAgora == mes) {
            if (dAgora < dia) {
                return id - 1
            } else if (dAgora >= dia) {
                return id
            }
        }
    }
}

const dataRef = idade(17, 6, 2005)

console.log(dataRef(16, 6, 2022))
console.log(dataRef(16, 7, 2008))

const dataRef2 = idade(12, 07, 2008)

console.log(dataRef2(16, 6, 2022))
console.log(dataRef2(16, 7, 2008))
