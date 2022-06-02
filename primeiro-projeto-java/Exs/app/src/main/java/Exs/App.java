package Exs;

import java.util.Scanner;

public class App {
    

    public static void main(String[] args) {
   
        Scanner leitor = new Scanner(System.in);
        
        int Valor;
        float Prestacao;
        
        System.out.print("Qual o valor do produto? ");
        Valor = leitor.nextInt();
        
        Prestacao = Valor / 5;
        
        System.out.println("Serao 5x de " + Prestacao);
        
    }

}    
