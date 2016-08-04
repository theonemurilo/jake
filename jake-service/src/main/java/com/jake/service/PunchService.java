package com.jake.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.jake.dao.PunchRepository;
import com.jake.domain.Login;
import com.jake.domain.Punch;
import com.jake.domain.User;

@org.springframework.stereotype.Service
public class PunchService implements Service<Punch> {

	@Autowired
	private PunchRepository punchRepository;

	public List<Punch> findAll() {
		return punchRepository.findAll();
	}

	public Punch save(Punch punch) {
		punch.setNewDates();
		return punchRepository.save(punch);
	}

	public Punch update(Punch punch) {
		punch.setNewLastUpdateDate();
		return punchRepository.save(punch);
	}

	public Punch saveOrUpdate(Punch punch) {
		if (!StringUtils.hasText(punch.getId())) {
			return save(punch);
		} else {
			return update(punch);
		}
	}
	
	public List<Punch> findPunchsByUserLoginUsername(String username){
		return punchRepository.findPunchsByUserLoginUsername(username);
	}

	public void delete(String id) {
		punchRepository.delete(id);
	}

	public Punch findById(long id) {
		return punchRepository.findOne(String.valueOf(id));
	}

	public void delete(Iterable<Punch> iterable) {
		punchRepository.delete(iterable);
	}

	public void delete(Punch punch) {
		punchRepository.delete(punch);
	}
}
