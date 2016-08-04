package com.jake.domain;

public class Login extends DomainObject {

	private String email;
	private String username;
	private String password;

	public Login(String email) {
		this.email = email;
	}

	public Login() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String userName) {
		this.username = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
