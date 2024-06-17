---
title: My notes from the Lucene Revolution conference
image: "/wp-content/uploads/2015/05/solr.jpeg"
pubDate: 2012-05-30
author: "Travis Carlson"
profile: "/team/travis.jpg"
type: "Article"
brief: "Instructions for configuring swap memory on an EC2 instance"
tags: ["Machine Learning","Solr"]
---
My notes and brainstorming from the <a href="http://lucenerevolution.org/past-events/" target="_blank">Lucene Revolution</a> conference in Cambridge, MA

# Themes

## Clustering

  * automatically search related topics that are not syntactically related (CareerBuilder example)
  * type-ahead populated by terms in the same cluster (NHS example)
  * clustering can recommend topics for a taxonomy based on content, but the user-visible labels for the topics must be hand-written/selected, there needs to be a (periodic?) human task of mapping the clusters to the taxonomy
  * some clustering algorithms (fuzzy k-means, LDA) allow for overlapping topics

## Named Entity Recognition (aka Information Extraction)

  * Use a framework such as GATE for annotating parts of speech, etc. Then need to train the system based on a domain-specific vocabulary
  * There is no OOTB solution for this, always need to implement something specific to our domain
  * There are <a href="http://www.w3.org/wiki/SweoIG/TaskForces/CommunityProjects/LinkingOpenData" target="_blank">some public-domain dictionaries</a> available (Wikipedia, WordNet, etc.)
  * Semantic annotation can be dictionary-based (text file) or ontology-based (OWL format)
  * Semantic Search takes this to the next level (SPARQL)

## Metadata

All the power of an intelligent search interface hinges on metadata!
  
What metadata do we have for our content?

## Recommendations

Approach the search interface as if it were a conversation to better understand what the user wants and for the user to better understand what he/she wants (travel agency example, NHS example)
  
The more we know about a user, the better recommendations we can make
  
What do we know about a user?

# Products / Projects

## Natural Language Processing

<a href="http://gate.ac.uk" target="_blank">GATE</a> &#8211; The gorilla of open source frameworks for NLP
  
<a href="http://www.ontotext.com" target="_blank">Ontotext</a> &#8211; Major contributor to GATE, Bulgarian company w/ all kinds of cool semantic stuff, much of it freely available for use
  
<a href="http://alias-i.com/lingpipe" target="_blank">LingPipe</a> &#8211; One of the more attractive and popular commercial frameworks for NLP, but expensive ($9.5K/year production license)

<a href="http://www.searchenginecaffe.com/2007/03/java-open-source-text-mining-and.html" target="_blank">Succinct list of NLP technologies</a>
  
<a href="http://alias-i.com/lingpipe/web/competition.html" target="_blank">Exhaustive list of NLP technologies</a>

## Machine Learning

Mahout &#8211; Machine Learning algorithms designed to be highly scalable and run on Hadoop
  
<a href="http://www.cs.waikato.ac.nz/ml/weka/" target="_blank">Weka</a> &#8211; Open source framework for Machine Learning, more mature and comprehensive than Mahout, but more research-oriented
  
<a href="http://mallet.cs.umass.edu" target="_blank">Mallet</a> &#8211; Another research-oriented open source framework for Machine Learning, particularly good at text classification, topic modeling, and sequential tagging 

## Others

Nutch &#8211; Open source Google-style web crawler + search engine
  
Neo4J &#8211; Database for storing relational graphs
  
Amazon Mechanical Turk &#8211; marketplace for data entry jobs

# Presentation Notes

## ISS

Multidimensional analysis of an unfolding event, need to distill information for decision makers:

  * text analysis
  * social media
  * audio/video analysis
  * positional/geo data
  * CEP 

## Smartlogic

Company that specializes in building ontologies

## BasisTechnology

Specialists in multi-lingual search + indexing, commercial plugin for Solr, supports a ton of languages (no decent open source available for non-english searching).
  
Also offer some commercial solutions for text analytics.

## UCLA

ability to search television archives based on closed-caption subtitles

## CiteSeerX (Penn State)

have a ton of web crawlers, use OpenCalais for text analysis

## Hadoop

loooots of talk about Hadoop
