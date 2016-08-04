package com.jake.domain;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public class Punch extends DomainObject {
	
	public static final String PUNCH_TIME_FORMAT = "yyyyMMddHHMM";

	public static void main(String[] args) {
		SimpleDateFormat dateFormat = new SimpleDateFormat(PUNCH_TIME_FORMAT);
		System.out.println(dateFormat.format(new Date()));
	}
	
	private String timePunch;
	private User user;
	
	public void setNewDates(){
		setCreateDate(Instant.now());
		setLastUpdateDate(Instant.now());
	}
	
	public void setNewLastUpdateDate(){
		setLastUpdateDate(Instant.now());
	}

	public String getTimePunch() {
		return timePunch;
	}

	public void setTimePunch(String timePunch) {
		this.timePunch = timePunch;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
