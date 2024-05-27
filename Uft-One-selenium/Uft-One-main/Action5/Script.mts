SystemUtil.Run "https://demoqa.com/select-menu"
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Purple" @@ script infofile_;_ZIP::ssf10.xml_;_
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Red"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Blue"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Green"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Yellow"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Black"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Voilet"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Indigo"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Aqua"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "Magenta"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").CheckProperty "visible","True"
wait(1)
Browser("DEMOQA_2").Page("DEMOQA").WebList("selectMagenta").Select "White"

