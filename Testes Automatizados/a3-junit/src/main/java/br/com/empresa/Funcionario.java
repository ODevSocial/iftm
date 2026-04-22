package br.com.empresa;

public class Funcionario {

    protected String nome;
    protected int horasTrabalhadas;
    protected double valorHora;

    protected static final double SALARIO_MINIMO = 1518.0;

    public Funcionario(String nome, int horasTrabalhadas, double valorHora) {
        this.nome = nome;
        setHorasTrabalhadas(horasTrabalhadas);
        setValorHora(valorHora);
    }

    public void setHorasTrabalhadas(int horasTrabalhadas) {
        if (horasTrabalhadas < 20 || horasTrabalhadas > 160) {
            throw new IllegalArgumentException("Horas devem estar entre 20 e 160.");
        }
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public void setValorHora(double valorHora) {
        double min = SALARIO_MINIMO * 0.01;
        double max = SALARIO_MINIMO * 0.10;

        if (valorHora < min || valorHora > max) {
            throw new IllegalArgumentException("Valor por hora deve estar entre 15.18 e 151.8.");
        }
        this.valorHora = valorHora;
    }

    public double calcularPagamento() {
        double pagamento = horasTrabalhadas * valorHora;

        if (pagamento < SALARIO_MINIMO || pagamento > 10000.0) {
            throw new IllegalArgumentException("Pagamento deve estar entre 1518.00 e 10000.00.");
        }

        return pagamento;
    }
}