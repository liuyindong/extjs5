package com.rdec.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rdec.dao.MyBatisDao;
import com.rdec.service.BaseService;
import com.rdec.util.FieldUtil;

@Service
public abstract class BaseServiceImpl<T> implements BaseService<T>
{
	@Autowired
	public MyBatisDao mybatiseDao;

	@Override
	public int add(T t)
	{
		 return mybatiseDao.insert(getXlmName(t) + ".add", t);
	}

	@Override
	public int update(T t)
	{
		return mybatiseDao.update(getXlmName(t) + ".update", t);
	}
	
	private String getXlmName(T t)
	{
		return new FieldUtil<T>().getFieldValueByName("xlmName", t);
	}

	

}
