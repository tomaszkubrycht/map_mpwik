var Wsp = [Number(lat.trim()), Number(lon.trim())];
//                            marker = L.marker(Wsp, { icon: greenIcon }).bindPopup("Nazwa Kienta:" + item['imie'] + " " + item['adres']);
markery.addLayer(L.marker(Wsp, { icon: greenIcon }).bindPopup("<b>Nazwa klienta: </b><spam style='color:red'>" + nazwisko.trim() + "</spam><br/><b>Adres:</b> " + adres.trim()+'<br/><b>Średnie zużycie wody: </b>b/d<br/><b>Ostatni odczyt:</b>b/d'));
//                            markers.push(marker);
    map.addLayer(markery);