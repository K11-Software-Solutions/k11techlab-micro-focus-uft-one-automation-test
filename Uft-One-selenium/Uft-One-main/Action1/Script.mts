
'''''HW1
SystemUtil.Run"https://petstore.octoperf.com/actions/Catalog.action"
Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("search").Set "fish"
Browser("JPetStore Demo").Page("JPetStore Demo").WebButton("Searchbtn").Click
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebElement("FI-FW-02 Control").CheckProperty "innerhtml"," FI-FW-02 "
Browser("JPetStore Demo_2").CloseAllTabs


