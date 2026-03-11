package contaBancaria;

public class ContaPo extends ContaBancaria {
    private double taxaRendimento;

    public ContaPo(String titular, double saldoInicial, double taxaRendimento) {
        super(titular, saldoInicial);
        this.taxaRendimento = taxaRendimento;
    }

    public void aplicarRendimento() {
        saldo += saldo * taxaRendimento / 100;
    }

    @Override
    public String exibeSaldo() {
        return String.format("Saldo da conta poupança de %s: R$ %.2f", titular, saldo);
    }
}