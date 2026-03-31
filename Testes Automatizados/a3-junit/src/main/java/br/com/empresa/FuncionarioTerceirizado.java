package br.com.empresa;

public class FuncionarioTerceirizado extends Funcionario {

    private double despesasAdicionais;

    public FuncionarioTerceirizado(String nome, int horas, double valorHora, double despesas) {
        super(nome, horas, valorHora);
        setDespesasAdicionais(despesas);
    }

    public void setDespesasAdicionais(double despesasAdicionais) {
        if (despesasAdicionais > 1000) {
            throw new IllegalArgumentException("Despesas adicionais não podem ultrapassar 1000.");
        }
        this.despesasAdicionais = despesasAdicionais;
    }

    @Override
    public double calcularPagamento() {
        double pagamento = super.calcularPagamento() + (despesasAdicionais * 1.1);

        if (pagamento < SALARIO_MINIMO || pagamento > 10000.0) {
            throw new IllegalArgumentException("Pagamento deve estar entre 1518.00 e 10000.00.");
        }

        return pagamento;
    }
}