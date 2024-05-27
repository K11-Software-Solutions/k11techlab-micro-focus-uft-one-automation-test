SystemUtil.Run "https://selenium08.blogspot.com/2019/07/check-box-and-radio-buttons.html" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Check box and Radio buttons").Maximize
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebRadioGroup("CheckIE").Select "IE"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebRadioGroup("CheckIE").CheckProperty "checked", "1"
Browser("Check box and Radio buttons_2").Page("Check box and Radio buttons").WebRadioGroup("opera").CheckProperty "disabled", "0"
Browser("Check box and Radio buttons_2").Page("Check box and Radio buttons").WebRadioGroup("mozilla").Select "Mozilla"
Browser("Check box and Radio buttons_2").Page("Check box and Radio buttons").WebRadioGroup("mozilla").CheckProperty "checked", "1"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebRadioGroup("CheckIE").CheckProperty "disabled","0" @@ script infofile_;_ZIP::ssf5.xml_;_
