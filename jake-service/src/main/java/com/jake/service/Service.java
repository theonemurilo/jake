package com.jake.service;

import java.util.List;

import com.jake.domain.Punch;

public interface Service<T> {
	T save(T object);
	T saveOrUpdate(T object);
	T update(T object);
	void delete(String id);
	void delete(Iterable<T> iterable);
	void delete(Punch punch);
	List<T> findAll();
	T findById(long id);
} 
