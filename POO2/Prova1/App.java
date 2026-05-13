public class App {
    public static void main(String[] args) {
        // seta um valor válido
        String cpf = "12345678901"; 

        if (!Validacao.validarCpf(cpf)) {
            System.out.println("CPF Inválido. A aplicação será encerrada.");
            System.exit(0);
        }

        try {
            // bonus
            Gerente gerente = new Gerente("Alice", 8000.0, new Departamento("TI"), "Rua Principal, 100");
            gerente.registrarKpi(20.0);

            // dev
            Desenvolvedor desenvolvedor = new Desenvolvedor("Bob", 5000.0);

            // poliformia
            Colaborador[] folhaPagamento = {gerente, desenvolvedor};

            // Saída formatada
            System.out.println("--- PROCESSAMENTO DA FOLHA ---");
            for (Colaborador colaborador : folhaPagamento) {
                System.out.printf("Salário Líquido Processado: R$ %.2f\n", colaborador.calcularSalarioLiquido());
            }
            System.out.println("____________________________");
            System.out.println("Total de colaboradores: " + Colaborador.totalColaboradores);

        } catch (CalculaInvalidoException e) {
            System.out.println("Erro durante o processamento da folha: " + e.getMessage());
        }
    }
}