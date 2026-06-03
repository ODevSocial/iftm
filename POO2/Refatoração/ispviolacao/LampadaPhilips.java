package ispviolacao;

public class LampadaPhilips implements DispositivoSuperInteligente {
    @Override
    public void ligar() { 
        System.out.println("Lâmpada acesa."); 
    }

    @Override
    public void desligar() { 
        System.out.println("Lâmpada apagada."); 
    }
}