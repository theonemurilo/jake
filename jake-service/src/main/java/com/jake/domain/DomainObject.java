package com.jake.domain;

import java.time.Instant;
import java.util.Calendar;

import org.springframework.data.annotation.Id;

public abstract class DomainObject implements Recordable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4555437623021108424L;

	@Id
	private String id;
	private Instant createDate;
	private Instant lastUpdateDate;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Instant getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Instant createDate) {
		this.createDate = createDate;
	}

	public Instant getLastUpdateDate() {
		return lastUpdateDate;
	}

	public void setLastUpdateDate(Instant lastUpdateDate) {
		this.lastUpdateDate = lastUpdateDate;
	}
}
