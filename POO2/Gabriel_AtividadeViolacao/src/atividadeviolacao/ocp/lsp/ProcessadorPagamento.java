package atividadeviolacao.ocp.lsp;

public class ProcessadorPagamento {
    public void processar(EstrategiaPagamento estrategia) {
        estrategia.ejecutar();
    }
}