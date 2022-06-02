package Exercícios;

import java.util.Scanner;

/**
 *
 * @author Natan
 */
public class Exercicio {
    
    public static void main(String[] args) {
        
        //Escreva um algoritmo que leia o nome de um vendedor, o seu salário 
        //fixo e o total de vendas efetuadas
        //por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de 
        //comissão sobre suas vendas efetuadas, informar o seu nome, o salário
        //fixo e salário no final do mês;
        
        Scanner leitor = new Scanner(System.in);
        
        String Vendedor = "";
        float Salario = 0.0f;
        int TotalVendas = 0;
        
        System.out.println("Digite o nome do vendedor: ");
        Vendedor = leitor.nextLine();
        
        System.out.println("Digite o salário: ");
        Salario = leitor.nextFloat();
        
        System.out.println("Total de vendas efetuadas no mês: ");
        TotalVendas = leitor.nextInt();
        
        
    }
}
