package org.uide.main1;

import java.util.Arrays;
import java.util.Scanner;

public class Main1 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] testnames = { "Test1", "Test2", "Test3" };

        String[] names = inputNames(scanner);
        String[] names2 = findNames(names, scanner);
        String[] names3 = addArrays(names2, testnames);
        String[] names4 = sortArrays(names3);
        for (String result : names4) {
            System.out.println(result);
        }
    }

    public static String[] inputNames(Scanner scanner) {
        System.out.print("Enter names separated by commas: ");
        String input = scanner.nextLine();
        String[] names = input.split(",");
        return names;
    }

    public static String[] findNames(String[] names, Scanner scanner) {
        String[] allNames = { "Yeferson", "Arlette", "Leonardo", "Juan", "Kevin", "Danny", "Ricardo", "Nicolas",
                "Santiago", "Andres", "Anderson" };

        for (int i = allNames.length - 1; i >= 0; i--) {
            for (String name : names) {
                String trim = name.trim();
                if (allNames[i].equals(trim)) {
                    System.out.println(trim + " se encuentra en la posicion " + i);
                    System.out.println("Desea remplasar " + trim + "? (Y/N)");
                    String input = scanner.nextLine();
                    if (input.equalsIgnoreCase("y")) {
                        System.out.println("Ingrese el nuevo nombre: ");
                        String newName = scanner.nextLine();
                        allNames[i] = newName;
                    } else {
                        System.out.println("No se reemplazo el nombre");
                    }
                }
            }
        }
        return allNames;
    }

    public static String[] addArrays(String[] array1, String[] array2) {
        String[] newArray = new String[array1.length + array2.length];
        int index = 0;
        for (String string : array1) {
            newArray[index] = string;
            index++;
        }
        for (String string : array2) {
            newArray[index] = string;
            index++;
        }
        return newArray;
    }

    public static String[] sortArrays(String[] array) {
        Arrays.sort(array);
        return array;
    }

}