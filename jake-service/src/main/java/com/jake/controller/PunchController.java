package com.jake.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jake.domain.Punch;
import com.jake.service.PunchService;

@RestController
public class PunchController {

	@Autowired
	@Qualifier("punchService")
	private PunchService punchService;

	@RequestMapping(method = RequestMethod.POST, value = "/punches")
	public void save(@RequestBody Punch punch) {
		punchService.saveOrUpdate(punch);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/punches")
	public List<Punch> findAll() {
		return punchService.findAll();
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/punches/{id}")
	public void delete(@PathVariable("id") String id) {
		punchService.delete(id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/punches")
	public void delete(@RequestBody List<Punch> punches) {
		punchService.delete(punches);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/punches/{username}")
	public List<Punch> findPunchsByEmai(@PathVariable("username") String username) {
		return punchService.findPunchsByUserLoginUsername(username);
	}
}
