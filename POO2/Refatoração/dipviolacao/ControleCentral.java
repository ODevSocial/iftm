package dipviolacao;

import ispviolacao.DispositivoSuperInteligente;
import java.util.Arrays;
import java.util.List;

public class ControleCentral {
    private final List<DispositivoSuperInteligente> dispositivos;

    // Injeção de Dependência via Construtor
    public ControleCentral(DispositivoSuperInteligente... dispositivos) {
        this.dispositivos = Arrays.asList(dispositivos);
    }

    public void iniciarExpediente() { 
        for (DispositivoSuperInteligente dispositivo : dispositivos) {
            dispositivo.ligar();
        }
    }

    public void encerrarExpediente() { 
        for (DispositivoSuperInteligente dispositivo : dispositivos) {
            dispositivo.desligar();
        }
    }
}