package contaBancaria;

public class ContaCoPremium extends ContaCo {
    private double cashBackPercentual;

    public ContaCoPremium(String titular, double saldoInicial, double limiteChequeEspecial, double cashBackPercentual) {
        super(titular, saldoInicial, limiteChequeEspecial);
        this.cashBackPercentual = cashBackPercentual;
    }

    @Override
    public boolean sacar(double valor) {
        boolean saqueRealizado = super.sacar(valor);
        if (saqueRealizado) {
            double cashback = valor * (cashBackPercentual / 100);
            saldo += cashback;
        }
        return saqueRealizado;
    }

    public String exibeBeneficioPremium() {
        return String.format("Conta Corrente Premium com cashback de %.2f%% em cada saque.", cashBackPercentual);
    }
}