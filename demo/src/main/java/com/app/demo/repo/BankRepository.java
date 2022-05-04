package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long>{

}