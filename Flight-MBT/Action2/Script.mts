' Book a flight according to the passed in 7 parameters 
'This action must start on the post-login screen that shows BOOK FLIGHT and SEARCH ORDER.

a=Parameter("FlyFrom")
b=Parameter("FlyTo")
c=Parameter("OrderDate") ' must use format 19-Dec-2022
d=Parameter("ClassOfService")
e=Parameter("Tickets")
f=Parameter("PassengerName")
g=Parameter("SelectedRow")

' If we're not on the BOOK FLIGHT screen then exit
'Updated by test maintenance run
'Updated by test maintenance run
'If WpfWindow("OpenText MyFlight Sample Application_2").Exist (4) Then
If WpfWindow("OpenText MyFlight Sample Application").Exist (4) Then
WpfWindow("OpenText MyFlight Sample Application").WpfComboBox("fromCity").Select a @@ hightlight id_;_2135054328_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("OpenText MyFlight Sample Application").WpfComboBox("toCity").Select b @@ hightlight id_;_1948026184_;_script infofile_;_ZIP::ssf8.xml_;_
'WpfWindow("OpenText MyFlight Sample Application").WpfCalendar("datePicker").SetDate  @@ hightlight id_;_2135059656_;_script infofile_;_ZIP::ssf10.xml_;_
' Calculate the date 1 week from now
Dim currentDate, futureDate
currentDate = Date
futureDate = DateAdd("d", 7, currentDate) ' Add 7 days to the current date

' Format the date as needed (e.g., "MM/DD/YYYY")
Dim formattedDate
formattedDate = Month(futureDate) & "/" & Day(futureDate) & "/" & Year(futureDate)

' Set the calculated date in the date picker
WpfWindow("OpenText MyFlight Sample Application").WpfCalendar("datePicker").SetDate formattedDate
WpfWindow("OpenText MyFlight Sample Application").WpfComboBox("Class").Select d
WpfWindow("OpenText MyFlight Sample Application").WpfComboBox("numOfTickets").Select e
WpfWindow("OpenText MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
WpfWindow("OpenText MyFlight Sample Application").WpfTable("flightsDataGrid").SelectRow g
WpfWindow("OpenText MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click

WpfWindow("OpenText MyFlight Sample Application").WpfEdit("passengerName").Set f
WpfWindow("OpenText MyFlight Sample Application").WpfButton("ORDER").Click

End If

Wait 2 ' The Exist statement below seems to find a little box that exists if we run too fast - so the Wait is necessary
'Wait for Completed message to appear (about 3-4 seconds)
'Updated by test maintenance run
'If WpfWindow("OpenText MyFlight Sample Application_2").WpfObject("OrderCompletedMessage").Exist (4) Then
If WpfWindow("OpenText MyFlight Sample Application").WpfComboBox("fromCity").Exist (4) Then
	WpfWindow("OpenText MyFlight Sample Application").WpfObject("OrderCompletedMessage").Output CheckPoint("OrderCompletedNumber") @@ hightlight id_;_1929008192_;_script infofile_;_ZIP::ssf20.xml_;_
End  If

Parameter("PassengerNameOut") = f
Parameter("OrderDateOut") = c

' Flight app ends on ORDER DETAILS screen with order number showing and NEW SEARCH button available
