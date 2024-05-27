SystemUtil.Run "https://selenium08.blogspot.com/2019/11/selenium-iframe.html"
Browser("Selenium IFrame").Page("Selenium IFrame").Frame("iframe_b").WebElement("ServicesResume").HoverTap
Browser("Selenium IFrame").Page("Selenium IFrame").Frame("iframe_b").Link("Text resume").Click
Browser("Resume Writing for Experienced").Page("Resume Writing for Experienced").CheckProperty "title","Resume Writing for Experienced and Mid Level Professionals | Naukri Fastforward"


