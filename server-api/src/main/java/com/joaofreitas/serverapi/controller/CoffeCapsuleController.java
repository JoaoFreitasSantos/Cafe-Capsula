package com.joaofreitas.serverapi.controller;

import com.joaofreitas.serverapi.CoffeCapsuleRepository;
import com.joaofreitas.serverapi.ResourceNotFoundException;
import com.joaofreitas.serverapi.model.CoffeCapsule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin()

@RestController
@RequestMapping("/capsulas")
public class CoffeCapsuleController {

    @Autowired
    CoffeCapsuleRepository coffeCapsuleRepository;

    //GET pra todas as capsulas de cafe
    @GetMapping
    public List<CoffeCapsule> pegaTodasCapsulas(){
        return coffeCapsuleRepository.findAll();
    }
    //Cria nova capsula

    @PostMapping
    public CoffeCapsule criaCapsula(@Valid @RequestBody CoffeCapsule coffeCapsule) {
        return coffeCapsuleRepository.save(coffeCapsule);
    }
    //GET para única capsula de café

    @GetMapping("/{id}")
    public CoffeCapsule pegaCapsulaPorId(@PathVariable(value = "id") Long coffeCapsuleId){
        return coffeCapsuleRepository.findById(coffeCapsuleId)
                .orElseThrow( () -> new ResourceNotFoundException("CoffeCapsule", "id", coffeCapsuleId));
    }
    //PUT para dar update numa cápsula de cafe

    @PutMapping
    public CoffeCapsule updateCapsula(@PathVariable(value = "id") Long coffeCapsuleId, @Valid @RequestBody CoffeCapsule detalheCapsula){

        CoffeCapsule coffeCapsule = coffeCapsuleRepository.findById(coffeCapsuleId).
                orElseThrow( ()-> new ResourceNotFoundException("CoffeCapsule", "id", coffeCapsuleId) );
        coffeCapsule.setMarca(detalheCapsula.getMarca());
        coffeCapsule.setSabor(detalheCapsula.getSabor());
        CoffeCapsule capsulaAtual = coffeCapsuleRepository.save(coffeCapsule);
        return capsulaAtual;
    }
    //DELETE uma capsula de café
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletaCapsula(@PathVariable(value = "id") Long coffeCapsuleId){

        CoffeCapsule coffeCapsule = coffeCapsuleRepository.findById(coffeCapsuleId).
                orElseThrow( () -> new ResourceNotFoundException("CoffeCapsule", "Id", coffeCapsuleId));
        coffeCapsuleRepository.delete(coffeCapsule);
        return ResponseEntity.ok().build();
    }

}
