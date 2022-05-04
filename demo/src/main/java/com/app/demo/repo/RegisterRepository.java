package com.app.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.model.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long>{
    // Register findByEmailIdAndPassword(String emailId,String password);
    Register findByEmailId(String emailId);
}