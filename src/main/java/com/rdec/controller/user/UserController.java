package com.rdec.controller.user;

import java.util.concurrent.Callable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rdec.entity.user.UserEntity;
import com.rdec.service.user.UserService;

@RestController
@RequestMapping("/user/**")
public class UserController
{
	@Autowired
	private UserService userService;

	@RequestMapping("/list")
	public Callable<Object> listUser()
	{
		return new Callable<Object>()
		{
			@Override
			public Object call() throws Exception
			{
				UserEntity userEntity = new UserEntity();
				
				userService.add(userEntity);
				
				return userService.getList();
			}
		};
	}
}
