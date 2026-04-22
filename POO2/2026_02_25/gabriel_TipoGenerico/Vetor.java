package gabriel_TipoGenerico;
@SuppressWarnings("unchecked")
public class Vetor<T> {

    private T[] vet;
    private int tamanho;

    public Vetor(int tamanho) {
        this.tamanho = tamanho;
        this.vet = (T[]) new Object[tamanho];
    }

    public void setElemento(int posicao, T elemento) {
        vet[posicao] = elemento;
    }

    public T getElemento(int posicao) {
        return vet[posicao];
    }

    public int getTamanho() {
        return tamanho;
    }
}