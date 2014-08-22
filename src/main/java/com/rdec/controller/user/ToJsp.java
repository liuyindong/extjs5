package com.rdec.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/to/*")
public class ToJsp
{
	@RequestMapping("main")
	public String toMain()
	{
		return "main";
	}
}
