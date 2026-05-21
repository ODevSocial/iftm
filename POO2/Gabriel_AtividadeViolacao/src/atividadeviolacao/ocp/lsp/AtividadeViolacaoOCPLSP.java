package atividadeviolacao.ocp.lsp;

public class AtividadeViolacaoOCPLSP {

    public static void main(String[] args) {
        ProcessadorPagamento pg = new ProcessadorPagamento();

        ContaCorrente cc = new ContaCorrente(1000);
        pg.processar(new PagamentoBoleto(cc, 100));
        pg.processar(new Saque(cc, 100));
        System.out.println("Saldo da conta corrente depois do saque: " + cc.getSaldo());

        ContaPoupanca cp = new ContaPoupanca(1000);

        pg.processar(new Saque(cp, 100));
        System.out.println("\nSaldo da conta poupanca depois do saque: " + cp.getSaldo());
    }
}
