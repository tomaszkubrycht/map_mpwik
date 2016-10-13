$('.loading').fadeIn(50, function () {
    $.ajax({
        async:false,
        url: path,
        timeout: 100000,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var dane = data;
            $.each(data, function (index, item) {
                var Wsp = [Number(item["lat"].trim()), Number(item["longi"].trim())];
                //                            marker = L.marker(Wsp, { icon: greenIcon }).bindPopup("Nazwa Kienta:" + item['imie'] + " " + item['adres']);
                markery.addLayer(L.marker(Wsp, { icon: greenIcon }).bindPopup("<a href="+link+")><b>Nazwa klienta: </b><spam style='color:red'>" + item['imie'] + "</spam></a><br/><b>Adres:</b> " + item['adres']+'<br/><b>Średnie zużycie wody: </b>b/d<br/><b>Ostatni odczyt:</b>b/d'));

                //                            markers.push(marker);
                            
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        },

    });
    // L.featureGroup(markers).addTo(map);
    //markery.addLayer(markers);
    map.addLayer(markery);
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm2 = new L.TileLayer(osmUrl, { minZoom: 5, maxZoom: 13, attribution: attrib });
    var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);
    var credctrl = L.controlCredits({
        image: "/images/wodo_max.png",
        link: "http://www.mpwik.org/",
        text: "Interactive mapping<br/>by tk"
    }).addTo(map);
});
$('.loading').fadeOut(50);