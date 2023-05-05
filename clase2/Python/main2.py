import numpy as np

arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arreglo2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


def combineArrays(arr1, arr2):
    arreglo3 = []
    for i in range(len(arr1)):
        arreglo3.append(arr1[i])
        arreglo3.append(arr2[i])
    return arreglo3


def sumArrays(arr1, arr2):
    np_arr1 = np.array(arr1)
    np_arr2 = np.array(arr2)
    result = np.add(np_arr1, np_arr2)
    return result.sum()


def multiplyArrays(arr1, arr2):
    np_arr1 = np.array(arr1)
    np_arr2 = np.array(arr2)
    result = np.multiply(np_arr1, np_arr2)
    return result


def divideArrays(arr1, arr2):
    np_arr1 = np.array(arr1)
    np_arr2 = np.array(arr2)
    result = np.divide(np_arr1, np_arr2)
    return result


def randomArray():
    return np.random.randint(0, 100, 10)


print(combineArrays(arreglo, arreglo2))
print(sumArrays(arreglo, arreglo2))
print(multiplyArrays(arreglo, arreglo2))
print(divideArrays(arreglo, arreglo2))
print(randomArray())
