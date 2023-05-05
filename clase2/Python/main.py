arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arreglo2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


def combineArrays(arreglo1, arreglo2):
    arreglo3 = []
    for i in range(len(arreglo1)):
        arreglo3.append(arreglo1[i])
        arreglo3.append(arreglo2[i])

    return arreglo3


print(combineArrays(arreglo, arreglo2))
