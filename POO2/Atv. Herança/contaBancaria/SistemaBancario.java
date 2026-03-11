package contaBancaria;

import java.util.Scanner;

public class SistemaBancario {
    public static void main(String[] args) {
        menu();
    }

    public static void menu() {
        Scanner sc = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\nSISTEMA BANCÁRIO");
            System.out.println("1 - Conta Bancária");
            System.out.println("2 - Conta Corrente");
            System.out.println("3 - Conta Poupança");
            System.out.println("4 - Conta Corrente Premium");
            System.out.println("5 - Conta Corrente Empresarial");
            System.out.println("6 - Conta Poupança Estudantil");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = sc.nextInt();

            switch (opcao) {
                case 1 -> menuContaBancaria(sc);
                case 2 -> menuContaCorrente(sc);
                case 3 -> menuContaPoupanca(sc);
                case 4 -> menuContaPremium(sc);
                case 5 -> menuContaEmpresarial(sc);
                case 6 -> menuContaEstudantil(sc);
                case 0 -> System.out.println("fechando o sistema");
                default -> System.out.println("opção não válida");
            }
        } while (opcao != 0);
        sc.close();
    }

    public static void menuContaBancaria(Scanner sc) {
        System.out.print("Titular: ");
        sc.nextLine();
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();
        ContaBancaria conta = new ContaBancaria(titular, saldo);

        int op;
        do {
            System.out.println("\nConta Bancária");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Exibir Saldo");
            System.out.println("0 - Voltar");
            System.out.print("Opção: ");
            op = sc.nextInt();

            try {
                switch (op) {
                    case 1 -> {
                        System.out.print("Valor do depósito: ");
                        double v = sc.nextDouble();
                        conta.depositar(v);
                        System.out.println("depósito realizado");
                    }
                    case 2 -> {
                        System.out.print("Valor do saque: ");
                        double v = sc.nextDouble();
                        if (!conta.sacar(v)) {
                            throw new MinhasExcecoes("saldo insuficiente");
                        }
                        System.out.println("saque realizado");
                    }
                    case 3 -> System.out.println(conta.exibeSaldo());
                    case 0 -> System.out.println("voltar");
                    default -> System.out.println("opcao inválida");
                }
            } catch (MinhasExcecoes e) {
                System.out.println("Erro: " + e.getMessage());
            }
        } while (op != 0);
    }

    public static void menuContaCorrente(Scanner sc) {
        System.out.print("Titular: ");
        sc.nextLine();
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();
        System.out.print("Limite cheque especial: ");
        double limite = sc.nextDouble();
        ContaCo conta = new ContaCo(titular, saldo, limite);

        int op;
        do {
            System.out.println("\nConta Corrente");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Exibir Saldo");
            System.out.println("4 - Exibir Limite Cheque Especial");
            System.out.println("0 - Voltar");
            System.out.print("Opção: ");
            op = sc.nextInt();

            try {
                switch (op) {
                    case 1 -> {
                        System.out.print("Valor do depósito: ");
                        double v = sc.nextDouble();
                        conta.depositar(v);
                        System.out.println("Depósito realizado.");
                    }
                    case 2 -> {
                        System.out.print("Valor do saque: ");
                        double v = sc.nextDouble();
                        if (!conta.sacar(v)) {
                            throw new MinhasExcecoes("Saldo + cheque especial insuficiente.");
                        }
                        System.out.println("Saque realizado");
                    }
                    case 3 -> System.out.println(conta.exibeSaldo());
                    case 4 -> System.out.println(conta.exibeLimiteChequeEspecial());
                    case 0 -> System.out.println("voltando");
                    default -> System.out.println("Opção inválida.");
                }
            } catch (MinhasExcecoes e) {
                System.out.println("Erro: " + e.getMessage());
            }
        } while (op != 0);
    }

    public static void menuContaPoupanca(Scanner sc) {
        System.out.print("Titular: ");
        sc.nextLine();
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();
        System.out.print("Taxa de rendimento (%): ");
        double taxa = sc.nextDouble();
        ContaPo conta = new ContaPo(titular, saldo, taxa);

        int op;
        do {
            System.out.println("\nConta Poupança");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Exibir Saldo");
            System.out.println("4 - Aplicar Rendimento");
            System.out.println("0 - Voltar");
            System.out.print("Opção: ");
            op = sc.nextInt();

            try {
                switch (op) {
                    case 1 -> {
                        System.out.print("Valor do depósito: ");
                        double v = sc.nextDouble();
                        conta.depositar(v);
                        System.out.println("Depósito realizado.");
                    }
                    case 2 -> {
                        System.out.print("Valor do saque: ");
                        double v = sc.nextDouble();
                        if (!conta.sacar(v)) {
                            throw new MinhasExcecoes("Saldo insuficiente");
                        }
                        System.out.println("Saque realizado");
                    }
                    case 3 -> System.out.println(conta.exibeSaldo());
                    case 4 -> {
                        conta.aplicarRendimento();
                        System.out.println("Rendimento aplicado");
                    }
                    case 0 -> System.out.println("voltando");
                    default -> System.out.println("opção inválida");
                }
            } catch (MinhasExcecoes e) {
                System.out.println("Erro: " + e.getMessage());
            }
        } while (op != 0);
    }

    public static void menuContaPremium(Scanner sc) {
        System.out.print("Titular: ");
        sc.nextLine();
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();
        System.out.print("Limite cheque especial: ");
        double limite = sc.nextDouble();
        System.out.print("Cashback percentual: ");
        double cashback = sc.nextDouble();
        ContaCoPremium conta = new ContaCoPremium(titular, saldo, limite, cashback);

        int op;
        do {
            System.out.println("\nConta Premium");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Exibir Saldo");
            System.out.println("4 - Exibir Benefício Premium");
            System.out.println("0 - Voltar");
            System.out.print("Opção: ");
            op = sc.nextInt();

            try {
                switch (op) {
                    case 1 -> {
                        System.out.print("Valor do depósito: ");
                        double v = sc.nextDouble();
                        conta.depositar(v);
                        System.out.println("Depósito realizado");
                    }
                    case 2 -> {
                        System.out.print("Valor do saque: ");
                        double v = sc.nextDouble();
                        if (!conta.sacar(v)) {
                            throw new MinhasExcecoes("Saldo + cheque especial insuficiente");
                        }
                        System.out.println("Saque realizado com cashback");
                    }
                    case 3 -> System.out.println(conta.exibeSaldo());
                    case 4 -> System.out.println(conta.exibeBeneficioPremium());
                    case 0 -> System.out.println("voltando");
                    default -> System.out.println("opção inválida");
                }
            } catch (MinhasExcecoes e) {
                System.out.println("Erro: " + e.getMessage());
            }
        } while (op != 0);
    }

    public static void menuContaEmpresarial(Scanner sc) {
        System.out.print("Titular: ");
        sc.nextLine();
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();
        System.out.print("Limite cheque especial: ");
        double limite = sc.nextDouble();
        System.out.print("Taxa de juros para empréstimo: ");
        double juros = sc.nextDouble();
        ContaCoEmpresarial conta = new ContaCoEmpresarial(titular, saldo, limite, juros);

        int op;
        do {
            System.out.println("\nConta Empresarial");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Exibir Saldo");
            System.out.println("4 - Solicitar Empréstimo");
            System.out.println("0 - Voltar");
            System.out.print("Opção: ");
            op = sc.nextInt();

            try {
                switch (op) {
                    case 1 -> {
                        System.out.print("Valor do depósito: ");
                        double v = sc.nextDouble();
                        conta.depositar(v);
                        System.out.println("Depósito realizado.");
                    }
                    case 2 -> {
                        System.out.print("Valor do saque: ");
                        double v = sc.nextDouble();
                        if (!conta.sacar(v)) {
                            throw new MinhasExcecoes("Saldo + cheque especial insuficiente.");
                        }
                        System.out.println("Saque realizado");
                    }
                    case 3 -> System.out.println(conta.exibeSaldo());
                    case 4 -> {
                        System.out.print("Valor do empréstimo: ");
                        double v = sc.nextDouble();
                        if (!conta.solicitaEmprestimo(v)) {
                            throw new MinhasExcecoes("Empréstimo negado: valor acima do limite.");
                        }
                        System.out.println("Empréstimo concedido.");
                    }
                    case 0 -> System.out.println("voltando");
                    default -> System.out.println("opção inválida");
                }
            } catch (MinhasExcecoes e) {
                System.out.println("Erro: " + e.getMessage());
            }
        } while (op != 0);
    }

    public static void menuContaEstudantil(Scanner sc) {
        System.out.print("Titular: ");
        sc.nextLine();
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();
        System.out.print("Taxa de rendimento: ");
        double taxa = sc.nextDouble();
        System.out.print("Limite de isenção de taxa: ");
        double limite = sc.nextDouble();
        ContaPoEstudantil conta = new ContaPoEstudantil(titular, saldo, taxa, limite);

        int op;
        do {
            System.out.println("\nConta Poupança Estudantil");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Exibir Saldo");
            System.out.println("4 - Exibir Limite de Isenção");
            System.out.println("0 - Voltar");
            System.out.print("Opção: ");
            op = sc.nextInt();

            try {
                switch (op) {
                    case 1 -> {
                        System.out.print("Valor do depósito: ");
                        double v = sc.nextDouble();
                        conta.depositar(v);
                        System.out.println("Depósito realizado.");
                    }
                    case 2 -> {
                        System.out.print("Valor do saque: ");
                        double v = sc.nextDouble();
                        if (!conta.sacar(v)) {
                            throw new MinhasExcecoes("Saldo insuficiente");
                        }
                        System.out.println("Saque realizado.");
                    }
                    case 3 -> System.out.println(conta.exibeSaldo());
                    case 4 -> System.out.println(conta.exibeLimiteIsencao());
                    case 0 -> System.out.println("voltando");
                    default -> System.out.println("opção inválida");
                }
            } catch (MinhasExcecoes e) {
                System.out.println("Erro: " + e.getMessage());
            }
        } while (op != 0);
    }
}