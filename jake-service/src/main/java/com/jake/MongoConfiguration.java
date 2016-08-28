package com.jake;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.convert.CustomConversions;

import com.jake.dao.converter.InstantToTimestampConverter;
import com.jake.dao.converter.TimestampToInstantConverter;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;

@Configuration
@PropertySource(value = { "classpath:application.properties" })
public class MongoConfiguration extends AbstractMongoConfiguration {

	@Value("${spring.data.mongodb.host}")
	private String host;

	@Value("${spring.data.mongodb.port}")
	private int port;

	@Value("${spring.data.mongodb.database}")
	private String databaseName;

	public CustomConversions customConversions() {
		return new CustomConversions(Arrays.asList(new InstantToTimestampConverter(), new TimestampToInstantConverter()));
	}

	protected String getDatabaseName() {
		return databaseName;
	}

	public Mongo mongo() throws Exception {
		return new MongoClient(host, port);
	}
}
