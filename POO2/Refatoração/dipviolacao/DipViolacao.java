package dipviolacao;

import ispviolacao.DispositivoSuperInteligente;
import ispviolacao.ImpressoraEpson;
import ispviolacao.LampadaPhilips;

public class DipViolacao {
    public static void main(String[] args) {
        DispositivoSuperInteligente lampada = new LampadaPhilips();
        DispositivoSuperInteligente impressora = new ImpressoraEpson();

        ControleCentral controle = new ControleCentral(lampada, impressora);

        System.out.println("Iniciando expediente");
        controle.iniciarExpediente();

        System.out.println("\nEncerrando expediente");
        controle.encerrarExpediente();
    }
}