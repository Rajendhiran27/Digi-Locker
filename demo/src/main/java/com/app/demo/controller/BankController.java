package com.app.demo.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.exception.ResourceNotFoundException;
import com.app.demo.model.Bank;
import com.app.demo.repo.BankRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BankController {

	@Autowired
	private BankRepository bankRepository;
	
	// get all employees
	@GetMapping("/bank")
	public List<Bank> getAllBank(){
		return bankRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/bank")
	public Bank createBank(@RequestBody Bank bank) {
		return bankRepository.save(bank);
	}
	
	// get employee by id rest api
	@GetMapping("/bank/{id}")
	public ResponseEntity<Bank> getEmployeeById(@PathVariable Long id) {
		Bank bank = bankRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(bank);
	}
	
	// update employee rest api
	
	@PutMapping("/bank/{id}")
	public ResponseEntity<Bank> updateEmployee(@PathVariable Long id, @RequestBody Bank bankDetails){
		Bank bank = bankRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Bank Details not exist with id :" + id));
		
		bank.setAccName(bankDetails.getAccName());
		bank.setAccNumber(bankDetails.getAccNumber());
		bank.setAccIfsc(bankDetails.getAccIfsc());
		
		Bank updatedBank = bankRepository.save(bank);
		return ResponseEntity.ok(updatedBank);
	}
	
	// delete employee rest api
	@DeleteMapping("/bank/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Bank bank = bankRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		bankRepository.delete(bank);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}