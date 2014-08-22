package com.rdec.service;

import java.util.List;

public interface BaseService<T>
{
	public List<T> getList();
	
	public int add(T t);
	
	public int update(T t); 
}
