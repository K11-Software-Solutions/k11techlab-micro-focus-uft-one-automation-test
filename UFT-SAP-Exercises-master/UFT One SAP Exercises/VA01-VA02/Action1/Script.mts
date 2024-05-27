'Using T-Code VA01, create a new sales order

SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set "va01" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents").SAPGuiEdit("*Order Type").Set "or" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents").SAPGuiEdit("Sales Organization").Set "1710" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents").SAPGuiEdit("Distribution Channel").Set "10" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents").SAPGuiEdit("Division").Set "00" @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents").SAPGuiEdit("Sales Organization").SetFocus @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Documents").SAPGuiButton("Continue").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf5.xml_;_

SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("Sold-To Party").Set "EWM17-CU02" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("Ship-To Party").Set "EWM17-CU02" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("Ship-To Party").SetFocus @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("Cust. Reference").Set "450000019998" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("Cust. Ref. Date").Set "07/28/2022" @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("Cust. Ref. Date").SetFocus
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiTabStrip("TAXI_TABSTRIP_OVERVIEW").Select "Item Overview" @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiTable("All Items").SetCellData 1,"Item","10" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiTable("All Items").SetCellData 1,"Material","EWMS4-01" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiTable("All Items").SetCellData 1,"Order Quantity","1" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiTable("All Items").SetCellData 1,"Un","PC" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiTable("All Items").SelectCell 1,"Un" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiButton("Save").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Output CheckPoint("OrderNum") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Check CheckPoint("OrderNumCheckpoint") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf12.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiOKCode("OKCode").Set "/n" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf13.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf13.xml_;_
 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf15.xml_;_
