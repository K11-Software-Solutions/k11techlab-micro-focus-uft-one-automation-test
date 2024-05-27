SystemUtil.Run "https://selenium08.blogspot.com/2019/07/check-box-and-radio-buttons.html"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebCheckBox("redClick").Set "ON" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebCheckBox("greenClick").Set "ON"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebCheckBox("redClick").CheckProperty "checked", "1"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebCheckBox("OrangeClick").CheckProperty "checked", "0"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebCheckBox("blueClick").CheckProperty "disabled", "0"
Browser("Check box and Radio buttons").Page("Check box and Radio buttons").WebCheckBox("greenClick").CheckProperty "checked", "1"
Browser("Check box and Radio buttons").CloseAllTabs












