SystemUtil.Run "https://petstore.octoperf.com/actions/Catalog.action"
Browser("JPetStore Demo").Page("JPetStore Demo").Image("fish_click").Click
Browser("JPetStore Demo").Page("JPetStore Demo").Link("GoldFish").Click
Browser("JPetStore Demo").Page("JPetStore Demo").Link("large angel fish").Click
Browser("JPetStore Demo").Page("JPetStore Demo_2").Image("fish_Module").Click
Browser("JPetStore Demo").Page("JPetStore Demo").Link("FI-SW-01_Angelfish").Click
Browser("JPetStore Demo").Page("JPetStore Demo").Link("large angel fish").Click
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebElement("Sub Total: $22.00").CheckProperty "outertext", "Sub Total: $22.00 "
Browser("JPetStore Demo").CloseAllTabs









