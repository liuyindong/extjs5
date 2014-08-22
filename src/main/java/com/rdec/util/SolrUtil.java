package com.rdec.util;

import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.params.ModifiableSolrParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class SolrUtil
{
	@Autowired
	private Config config;

	public SolrDocumentList getSolrJson(String url, ModifiableSolrParams params)
	{
		if (url == null)
		{
			url = config.getSolrUrl();
		}
		HttpSolrServer solrService = new HttpSolrServer(url);

		solrService.setSoTimeout(3000); // socket read timeout
		solrService.setConnectionTimeout(1000);
		solrService.setDefaultMaxConnectionsPerHost(1000);
		solrService.setMaxTotalConnections(10);
		solrService.setFollowRedirects(false); // defaults to false
		solrService.setAllowCompression(true);
		solrService.setMaxRetries(1);

		QueryResponse response;
		SolrDocumentList results = null;
		try
		{
			params.set("wt", "json");
			params.set("index", "true");

			response = solrService.query(params);
			results = response.getResults();

		}
		catch (SolrServerException e)
		{
			e.printStackTrace();
		}
		return results;
	}
	public static void main(String[] args)
	{
		RestTemplate restTemplate = new RestTemplate();

		String solrResult = restTemplate.getForObject("http://www.baidu.com", String.class);
		
		System.out.println(solrResult);
	}
}
