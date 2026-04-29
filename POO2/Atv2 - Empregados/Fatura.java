public class Fatura implements Pagavel {
    private final String numeroPeca;
    private final String descricaoPeca;
    private int quantidade;
    private double precoItem;

    public Fatura(String numeroPeca, String descricaoPeca, int quantidade, double precoItem) {
        this.numeroPeca = numeroPeca;
        this.descricaoPeca = descricaoPeca;
        setQuantidade(quantidade);
        setPrecoItem(precoItem);
    }

    public String getNumeroPeca() {
        return numeroPeca;
    }

    public String getDescricaoPeca() {
        return descricaoPeca;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = Math.max(quantidade, 0);
    }

    public double getPrecoItem() {
        return precoItem;
    }

    public void setPrecoItem(double precoItem) {
        this.precoItem = Math.max(precoItem, 0.0);
    }

    @Override
    public String toString() {
        return String.format("Fatura:\nNúmero da peça: %s (%s)\nQuantidade: %d\nPreço por item: $%.2f",
                numeroPeca, descricaoPeca, quantidade, precoItem);
    }

    @Override
    public double calculaPagamento() {
        return getQuantidade() * getPrecoItem();
    }
}