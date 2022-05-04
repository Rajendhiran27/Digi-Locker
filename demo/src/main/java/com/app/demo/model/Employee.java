package com.app.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	// @Column(name="confirm_password")
	// private String cofirmpassword;
	// @Column(name="phone_number")
    // private String phoneNumber;

	
	@Column(name = "email_id")
	private String emailId;
	
	public Employee() {
		
	}

	// public Employee( String userName, String password, String cofirmpassword, String phoneNumber,
	// 		String emailId) {
	// 	this.userName = userName;
	// 	this.password = password;
	// 	this.cofirmpassword = cofirmpassword;
	// 	this.phoneNumber = phoneNumber;
	// 	this.emailId = emailId;
	// }

	// public long getId() {
	// 	return id;
	// }

	// public void setId(long id) {
	// 	this.id = id;
	// }

	// public String getUserName() {
	// 	return userName;
	// }

	// public void setUserName(String userName) {
	// 	this.userName = userName;
	// }

	// public String getPassword() {
	// 	return password;
	// }

	// public void setPassword(String password) {
	// 	this.password = password;
	// }

	// public String getCofirmPassword() {
	// 	return cofirmpassword;
	// }

	// public void setCofirmPassword(String cofirmpassword) {
	// 	this.cofirmpassword = cofirmpassword;
	// }

	// public String getPhoneNumber() {
	// 	return phoneNumber;
	// }

	// public void setPhoneNumber(String phoneNumber) {
	// 	this.phoneNumber = phoneNumber;
	// }

	// public String getEmailId() {
	// 	return emailId;
	// }

	// public void setEmailId(String emailId) {
	// 	this.emailId = emailId;
	// }
	
	public Employee(String firstName, String lastName, String emailId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}