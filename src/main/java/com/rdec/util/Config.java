package com.rdec.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Config
{
	@Value("${config.resUrl}")
	private String resUrl;
	
	// 搜索地址
	@Value("${config.solrUrl}")
	private String solrUrl;

	public String getSolrUrl()
	{
		return solrUrl;
	}

	public void setSolrUrl(String solrUrl)
	{
		this.solrUrl = solrUrl;
	}
}
