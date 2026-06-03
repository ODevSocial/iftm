package ispviolacao;

public class IspViolacao {
    public static void main(String[] args) {
        DispositivoSuperInteligente lampada = new LampadaPhilips();
        ImpressoraEpson impressora = new ImpressoraEpson();

        lampada.ligar();
        impressora.ligar();
        impressora.imprimirDocumento("Relatório de Atividade SOLID");
        
        lampada.desligar();
        impressora.desligar();
    }
}