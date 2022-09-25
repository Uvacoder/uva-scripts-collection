const fs = require('fs')
const url = require('url')

const _ = require('lodash')
const async = require('async')
const cheerio = require('cheerio')
const request = require('request')

const base = 'localhost:4000'
const firstLink = 'http://' + base + ''

const crawled = []
const inboundLinks = []

const makeRequest = function(crawlUrl, callback){
  console.log("💻💻💻 Scraping...\n")
  const startTime = new Date().getTime()
  request(crawlUrl, function (error, response, body) {

    const pageObject = {}
    pageObject.links = []

    const endTime = new Date().getTime()
    const requestTime = endTime - startTime
    pageObject.requestTime = requestTime

    const $ = cheerio.load(body)
    pageObject.title = $('title').text()
    pageObject.url = crawlUrl
    $('a').each(function(i, elem){
      pageObject.links.push({linkText: $(elem).text(), linkUrl: elem.attribs.href})
    })
    callback(error, pageObject)
  })
}

const myLoop = function(link){
  makeRequest(link, function(error, pageObject){
  	if(error) throw error // need better error handling
    console.log(pageObject)
    crawled.push(pageObject.url)
    async.eachSeries(pageObject.links, function(item, cb){
      parsedUrl = url.parse(item.linkUrl)
      if(parsedUrl.hostname == base){
        inboundLinks.push(item.linkUrl)
      }
      cb()
    }
    ,function(){
      const nextLink = _.difference(_.uniq(inboundLinks), crawled)
      if(nextLink.length > 0){
        myLoop(nextLink[0])
      }
      else {
        console.log('\n🥳🥳🥳 Done...')
      }
    })
  })
}

myLoop(firstLink)
