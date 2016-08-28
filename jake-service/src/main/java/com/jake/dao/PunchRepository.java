package com.jake.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jake.domain.Punch;
import com.jake.domain.User;

public interface PunchRepository extends MongoRepository<Punch, String> {
	public List<Punch> findPunchsByUserLoginUsername(String username);
}
