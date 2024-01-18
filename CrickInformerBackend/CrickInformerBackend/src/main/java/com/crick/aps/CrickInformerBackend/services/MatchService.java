package com.crick.aps.CrickInformerBackend.services;

import java.util.List;
import java.util.Map;

import com.crick.aps.CrickInformerBackend.entities.Match;



public interface MatchService {
	
	//get all mateches
	
	List<Match> getAllMatches();
	
	//get live matches
	
	List<Match> getLiveMatches();
	
	//get cwc2023 point table
	
	List<List<String>> getPointTable();

}
