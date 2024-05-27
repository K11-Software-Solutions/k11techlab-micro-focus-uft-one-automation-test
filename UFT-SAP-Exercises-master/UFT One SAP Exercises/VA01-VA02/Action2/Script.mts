' Using T-Code VA02, search and change the order quantity 

SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set "va02" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Sales Documents").SAPGuiEdit("Order").Set DataTable("OrderNumber", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Sales Documents").SAPGuiButton("Continue").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Standard Order").SAPGuiTabStrip("TAXI_TABSTRIP_OVERVIEW").Select "Item Overview" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Standard Order").SAPGuiTabStrip("TAXI_TABSTRIP_OVERVIEW").Select "Item detail" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Standard Order").SAPGuiEdit("Order Quantity").Set "2" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Standard Order").SAPGuiEdit("Order Quantity").SetFocus @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Standard Order").SAPGuiButton("Save").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Sales Documents").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
