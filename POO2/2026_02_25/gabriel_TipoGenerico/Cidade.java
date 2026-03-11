package gabriel_TipoGenerico;
public class Cidade {

    private String nome;
    private String adjetivo;
    private String estado;

    public Cidade(String nome, String adjetivo, String estado) {
        this.nome = nome;
        this.adjetivo = adjetivo;
        this.estado = estado;
    }

    public String getNome() {
        return nome;
    }

    public String getAdjetivo() {
        return adjetivo;
    }

    public String getEstado() {
        return estado;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setAdjetivo(String adjetivo) {
        this.adjetivo = adjetivo;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}