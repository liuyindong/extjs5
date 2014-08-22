package com.rdec.service.user.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rdec.entity.user.UserEntity;
import com.rdec.service.impl.BaseServiceImpl;
import com.rdec.service.user.UserService;

@Service
public class UserServiceImpl extends BaseServiceImpl<UserEntity> implements UserService
{
	private final String xlmName = "UserMapper.";

	@Override
	public List<UserEntity> getList()
	{
		return mybatiseDao.selectList(xlmName + "list_user");
	}

}
