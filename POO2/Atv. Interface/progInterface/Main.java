package progInterface;

import java.util.Scanner;

public class Main {
    public static void main(String [] args) {
        Scanner s = new Scanner (System.in);
        GeradorExtratos gerador = new GeradorExtratos();

        Conta conta = null;

        while (true) {
            System.out.println("\nMenu");
            System.out.println("1- Conta Poupança");
            System.out.println("2- Conta Corrente");
            System.out.println("0- Sair");

            int opcao = s.nextInt();

            if (opcao == 0) break;

            switch(opcao) {
                case 1:
                    conta = new ContaPoupanca();
                    break;
                case 2:
                    System.out.println("Informe a taxa da conta corrente: ");
                    double taxa = s.nextDouble();
                    conta = new ContaCorrente(taxa);
                    break;
                default:
                    System.out.println("Opção inválida");
                    continue;
            }

            int subOpcao;

            do {
                System.out.println("\nMenu");
                System.out.println("1- Depositar");
                System.out.println("2- Sacar");
                System.out.println("3- Ver extrato");
                System.out.println("0- Voltar");

                subOpcao = s.nextInt();

                switch (subOpcao) {
                    case 1:
                        System.out.println("Valor para depósito: ");
                        conta.depositar(s.nextDouble());
                        break;
                    case 2:
                        System.out.println("Valor para saque: ");
                        conta.sacar(s.nextDouble());
                        break;
                    case 3:
                        System.out.println(gerador.exibeExtrato(conta));
                        break;
                    case 0:
                        break;
                    default:
                        System.out.println("Opção inválida");
                }
            } while (subOpcao != 0 );
        }
        s.close();
        System.out.println("Programa encerrado");
    } 
}
