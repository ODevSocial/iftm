package org.iftm.gerenciadorveterinarios.servicies;

import java.util.Optional;

import org.iftm.gerenciadorveterinarios.entities.Animal;
import org.iftm.gerenciadorveterinarios.repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository repositorio;

    @Transactional
    public Animal cadastrar(Animal animal) {

        if (!animal.getEspecie().equalsIgnoreCase("Cachorro")
                && !animal.getEspecie().equalsIgnoreCase("Gato")) {

            throw new IllegalArgumentException("Não atendemos esta espécie");
        }

        animal.setInternado(true);

        return repositorio.save(animal);
    }

    @Transactional
    public Animal darAlta(Integer id) {

        Optional<Animal> animalOptional = repositorio.findById(id);

        if (!animalOptional.isPresent()) {
            throw new RuntimeException("Animal não encontrado");
        }

        Animal animal = animalOptional.get();

        animal.setInternado(false);

        return repositorio.save(animal);
    }
}