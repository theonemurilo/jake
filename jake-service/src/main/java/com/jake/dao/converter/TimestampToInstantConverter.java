package com.jake.dao.converter;

import java.sql.Timestamp;
import java.time.Instant;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class TimestampToInstantConverter implements Converter<Timestamp, Instant> {
	
	public Instant convert(Timestamp timestamp) {
		return Instant.ofEpochMilli(timestamp.getTime());
	}
}
