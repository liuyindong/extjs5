package com.rdec.entity.user;

import java.io.Serializable;

public class UserEntity implements Serializable
{
	private String xlmName = "UserMapper";
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String userCode,username;
	

	public String getUserCode()
	{
		return userCode;
	}

	public void setUserCode(String userCode)
	{
		this.userCode = userCode;
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getXlmName()
	{
		return xlmName;
	}
}
