package com.joaofreitas.serverapi;

import com.joaofreitas.serverapi.model.CoffeCapsule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoffeCapsuleRepository extends JpaRepository<CoffeCapsule, Long> {

}
