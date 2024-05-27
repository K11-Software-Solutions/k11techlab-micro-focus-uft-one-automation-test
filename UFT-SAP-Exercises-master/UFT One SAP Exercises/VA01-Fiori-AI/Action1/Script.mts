AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "User").Type "s4h_sd_dem"
AIUtil("text_box", "Password").Type "Welcome1"
AIUtil("button", "Log On").Click
AIUtil("search").Search "va01"
wait 15
AIUtil.FindTextBlock("Create Sales Orders").Click
AIUtil("text_box", "Division").Type "00"
AIUtil("text_box", "Distribution Channel:").Type "10"
'AIUtil("text_box", "Sales Organization:").Type "1710"
AIUtil("text_box", "Order Type:").Type "OR"
AIUtil.FindTextBlock("Continue").Click
AIUtil("text_box", "Cust. Ref. Date:").Type "07/28/2022"
AIUtil("text_box", "Cust. Reference:").Type "450000019998"
AIUtil("text_box", "Ship-To Party:").Type "EWM17-CU02"
AIUtil("text_box", "Sold-To Party:").Type "EWM17-CU02"
AIUtil.FindTextBlock("Save").Click
AIUtil.FindTextBlock("Exit").Click
wait 5
AIUtil("left_triangle").Click
AIUtil.FindTextBlock("Home").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign Out").Click
AIUtil.FindTextBlock("OK").Click
