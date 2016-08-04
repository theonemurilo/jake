package com.jake.dao.converter;

import java.sql.Timestamp;
import java.time.Instant;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class InstantToTimestampConverter implements Converter<Instant, Timestamp> {

	public Timestamp convert(Instant instant) {
		Timestamp timestamp = Timestamp.from(instant);

		return timestamp;
	}
}
