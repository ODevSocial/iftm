package contaBancaria;

public class ContaCo extends ContaBancaria {
    protected double limiteChequeEspecial;

    public ContaCo(String titular, double saldoInicial, double limiteChequeEspecial) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    @Override
    public boolean sacar(double valor) {
        if (saldo + limiteChequeEspecial >= valor) {
            saldo -= valor;
            return true;
        }
        return false;
    }

    public String exibeLimiteChequeEspecial() {
        return String.format("Limite de Cheque Especial: R$ %.2f", limiteChequeEspecial);
    }
}
