package com.rdec.util;

import java.lang.reflect.Field;

public class FieldUtil<T>
{
	public String getFieldValueByName(String fieldName, T t)
	{
		String value = null;
		try
		{
			Field fieldPassword = t.getClass().getDeclaredField(fieldName);
			fieldPassword.setAccessible(true);
			Object fieldValue = fieldPassword.get(t);
			value = fieldValue.toString();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return value;
	}
}
