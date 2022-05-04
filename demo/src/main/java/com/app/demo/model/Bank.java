package com.app.demo.model;
// import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "bank")
public class Bank {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	// @Column(name = "first_name")
	private String accName;

	// @Column(name = "last_name")
	private String accNumber;
    private String accIfsc;
    private String accUsername;
    private String accPassword;
    public Bank(String accName, String accNumber, String accIfsc, String accUsername, String accPassword) {
        this.accName = accName;
        this.accNumber = accNumber;
        this.accIfsc = accIfsc;
        this.accUsername = accUsername;
        this.accPassword = accPassword;
    }
    public Bank(){

    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getAccName() {
        return accName;
    }
    public void setAccName(String accName) {
        this.accName = accName;
    }
    public String getAccNumber() {
        return accNumber;
    }
    public void setAccNumber(String accNumber) {
        this.accNumber = accNumber;
    }
    public String getAccIfsc() {
        return accIfsc;
    }
    public void setAccIfsc(String accIfsc) {
        this.accIfsc = accIfsc;
    }
    public String getAccUsername() {
        return accUsername;
    }
    public void setAccUsername(String accUsername) {
        this.accUsername = accUsername;
    }
    public String getAccPassword() {
        return accPassword;
    }
    public void setAccPassword(String accPassword) {
        this.accPassword = accPassword;
    }
    

}