SystemUtil.Run "https://selenium08.blogspot.com/2019/11/dropdown.html"
''sıdıka onay
count=0
Browser("Demo Dropdown List").Page("Demo Dropdown List").WebList("Month").Select "March"
count=+1
wait(1)
Browser("Demo Dropdown List").Page("Demo Dropdown List").WebList("Month").Select "April"
count=+2
wait(1)
Browser("Demo Dropdown List").Page("Demo Dropdown List").WebList("Month").Select "October"
count=+3
wait(1)
' Sayacın 3 olup olmadığını kontrol et ve başarılı mesaj kutusunu göster
If count = 3 Then
    Reporter.ReportEvent micPass, "Test Başarılı", "Sayac değeri 3 oldu!"
Else
    Reporter.ReportEvent micFail, "Test Başarısız", "Sayac değeri 3 olmadı!"
End If

If count=3 Then
	MsgBox("Basarili")
End If
