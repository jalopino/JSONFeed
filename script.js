function Func() {
    fetch("./fruits.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let feed = ""
        for(let i=0; i<data.length; i++){
        feed += ("<p>"+(i+1)+". "+data[i].business+"</p>"+"<ul>")
        feed += ("<li>"+"Farmer ID: "+data[i].farmer_id+"</li>"+"</ul>"+"<br>")
    }
        document.getElementById("feed").innerHTML = feed;
    })
  }