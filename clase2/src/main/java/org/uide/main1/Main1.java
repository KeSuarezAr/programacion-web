package org.uide.main1;

import java.util.Scanner;

public class Main1 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] names = inputNames(scanner);
        String[] results = findNames(names, scanner);
        for (String result : results) {
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
}