function Teszt(sorszam) {
    let kiiras = (`<h3>Beugró kérdések:</h3>`);
    switch (sorszam) {
        case (sorszam = 1):
            let bev1 = (`<h3>Magyarország a 2.világháborúban</h3>
            <img src="../kepek/kassa_1938.jpg" alt="Horthy és a magyar katonák bevonulnak Kassára az első bécsi döntést követően." class="bev_kepek">`);
            let beugrok = (`
            <form method="post" action="#">
                <p>
                    <label for="evszam_m_vh">Mikor volt az első bécsi döntés? (éééé/hh/dd)</label>
                    <input type="text" id="evszam_m_vh">
                </p>
                <p>Ki volt Magyarország 1939-1941-ig regnáló miniszterelnöke?</p>
                <p>
                    <label for="szemelyek_m_vh_1">Kállay Miklós</label>
                    <input type="radio" name="szemelyek" id="szemelyek_m_vh_1">
                </p>
                <p>
                    <label for="szemelyek_m_vh_2">Horthy Miklós</label>
                    <input type="radio" name="szemelyek" id="szemelyek_m_vh_2">
                </p>
                <p>
                    <label for="szemelyek_m_vh_3">Bethlen István</label>
                    <input type="radio" name="szemelyek" id="szemelyek_m_vh_3">
                </p>
                <p>
                    <label for="szemelyek_m_vh_4">Teleki Pál</label>
                    <input type="radio" name="szemelyek" id="szemelyek_m_vh_4">
                </p>
                <p>
                    <label for="helyszin_m_vh">Melyik területet szerezte meg Magyarország háborúval?</label>
                    </p>
                <p><select id="helyszin_m_vh">
                    <option>Erdély</option>
                    <option>Kárpátalja</option>
                    <option>Őrvidék</option>
                    <option>Felvidék</option>
                </select></p>
                <p class="gomb_rendezes"><input type="button" onclick="megold(${sorszam})" value="Ellenőriz" class="gombok"></p>
                <p class="gomb_rendezes"><input type="reset" value="Töröl" class="gombok"></p>
            </form>`
            );
            document.getElementById("a_teszt").innerHTML = (kiiras + beugrok);
            document.getElementById("bevezeto").innerHTML = bev1;
            break;

        case (sorszam = 2):
            let bev2 = (`<h3>Mária Terézia és II.József uralkodása</h3>
            <img src="../kepek/maria_terezia_nemesek.jpg" alt="Mária Teréziának esküt tesz a magyar nemesség. 'Életünket és vérünket!'" class="bev_kepek">`);
            let beugrok2 = (`
            <form method="post" action="#">
                <p>
                    <label for="evszam_m_II_J">Mikor uralkodott Mária Terézia a Habsburg Birodalom élén? (kezdőév-végső év)</label>
                    <input type="text" id="evszam_m_II_J">
                </p>
                <p>Mely kormányzati berendezkedés hirhedt képviselője II.József?</p>
                <p>
                    <label for="korm_ber_1">Parlamentáris monarchia</label>
                    <input type="radio" name="berendezkedesek" id="korm_ber_1">
                </p>
                <p>
                    <label for="korm_ber_2">Felvilágosult abszolutizmus</label>
                    <input type="radio" name="berendezkedesek" id="korm_ber_2">
                </p>
                <p>
                    <label for="korm_ber_3">Rendi konföderáció</label>
                    <input type="radio" name="berendezkedesek" id="korm_ber_3">
                </p>
                <p>
                    <label for="korm_ber_4">Alkotmányos monarchia</label>
                    <input type="radio" name="berendezkedesek" id="korm_ber_4">
                </p>
                <p>
                    <label for="helyszin_m_II_J">Melyik területet vesztette el a Habsburg Birodalom az osztrák örökösödési háborúban?</label>
                    </p>
                <p><select id="helyszin_m_II_J">
                    <option>Sziléziát</option>
                    <option>Magyarországot</option>
                    <option>Galíciát</option>
                    <option>Csehországot</option>
                </select></p>
                <p class="gomb_rendezes"><input type="button" onclick="megold(${sorszam})" value="Ellenőriz" class="gombok"></p>
                <p class="gomb_rendezes"><input type="reset" value="Töröl" class="gombok"></p>
            </form>`
            );
            document.getElementById("a_teszt").innerHTML = (kiiras + beugrok2);
            document.getElementById("bevezeto").innerHTML = bev2;
            break;
        case (sorszam = 3):
            let bev3 = (`<h3>A középkori városok</h3>
            <img src="../kepek/kozepkori_varos.jpg" alt="Középkori város ábrázolása." class="bev_kepek">`);
            let beugrok3 = (`
            <form method="post" action="#">
                <p>
                    <label for="evszam_varosok">Mikor zajlott a mezőgazdaság kora középkori forradalma (formátum: x.sz.)</label>
                    <input type="text" id="evszam_varosok">
                </p>
                <p>Hogy hívták a mesteremberek érdekvédelmi szervezetét?</p>
                <p>
                    <label for="ipar1">Manufaktúra</label>
                    <input type="radio" name="cehek" id="ipar1">
                </p>
                <p>
                    <label for="ipar2">Gyár</label>
                    <input type="radio" name="cehek" id="ipar2">
                </p>
                <p>
                    <label for="ipar3">Céh</label>
                    <input type="radio" name="cehek" id="ipar3">
                </p>
                <p>
                    <label for="ipar4">Cég</label>
                    <input type="radio" name="cehek" id="ipar4">
                </p>
                <p>
                    <label for="helyszin_varosok">Hol alakultak ki az első középkori nagyvárosok?</label>
                    </p>
                <p><select id="helyszin_varosok">
                    <option>Kelet-Európa</option>
                    <option>Közép-Amerika</option>
                    <option>Nyugat-Európa</option>
                    <option>Indokínai-félsziget</option>
                </select></p>
                <p class="gomb_rendezes"><input type="button" onclick="megold(${sorszam})" value="Ellenőriz" class="gombok"></p>
                <p class="gomb_rendezes"><input type="reset" value="Töröl" class="gombok"></p>
            </form>`
            );
            document.getElementById("a_teszt").innerHTML = (kiiras + beugrok3);
            document.getElementById("bevezeto").innerHTML = bev3;
            break;
        case (sorszam = 4):
            let bev4 = (`<h3>Az athéni demokrácia</h3>
            <img src="../kepek/athen.jpg" alt="Athéni ekklészia." class="bev_kepek">`);
            let beugrok4 = (`
            <form method="post" action="#">
                <p>
                    <label for="evszam_athen">Mikor törölték el az adósrabszolgaságot Athénban(formátum 'kr.e. '- VAGY 'kr.u. évszám')</label>
                    <input type="text" id="evszam_athen">
                </p>
                <p>Ki teremtette meg a demokrácia alapjait Athénban?</p>
                <p>
                    <label for="vezeto1">Szolón</label>
                    <input type="radio" name="demosz" id="vezeto1">
                </p>
                <p>
                    <label for="vezeto2">Drakón</label>
                    <input type="radio" name="demosz" id="vezeto2">
                </p>
                <p>
                    <label for="vezeto3">Periklész</label>
                    <input type="radio" name="demosz" id="vezeto3">
                </p>
                <p>
                    <label for="vezeto4">Kleiszthenész</label>
                    <input type="radio" name="demosz" id="vezeto4">
                </p>
                <p>
                    <label for="helyszin_athen">Kivel folytatott háborút Athén Kr.e. 431-404 között?</label>
                    </p>
                <p><select id="helyszin_athen">
                    <option>Perzsa-Birodalom</option>
                    <option>Makedón-Birodalom</option>
                    <option>Spárta</option>
                    <option>Knosszosz</option>
                </select></p>
                <p class="gomb_rendezes"><input type="button" onclick="megold(${sorszam})" value="Ellenőriz" class="gombok"></p>
                <p class="gomb_rendezes"><input type="reset" value="Töröl" class="gombok"></p>
            </form>`
            );
            document.getElementById("a_teszt").innerHTML = (kiiras + beugrok4);
            document.getElementById("bevezeto").innerHTML = bev4;
            break;
    }
}
function megold(fel_szam) {
    switch (fel_szam) {
        case (fel_szam = 1):
            var feladatok = ["evszam_m_vh", "szemelyek_m_vh_4", "helyszin_m_vh"];
            var megoldasok = ["1938/11/02", true, "1"];
            break;
        case (fel_szam = 2):
            var feladatok = ["evszam_m_II_J", "korm_ber_2", "helyszin_m_II_J"];
            var megoldasok = ["1740-1780", true, "0"];
            break;
        case (fel_szam = 3):
            var feladatok = ["evszam_varosok", "ipar3", "helyszin_varosok"];
            var megoldasok = ["10.sz.", true, "2"];
            break;
        case (fel_szam = 4):
            var feladatok = ["evszam_athen", "vezeto1", "helyszin_athen"];
            var megoldasok = ["kr.e. 594", true, "2"];
            break;
    }
    const megold1 = document.getElementById(feladatok[0]).value;
    const megold2 = document.getElementById(feladatok[1]).checked;
    const megold3 = document.getElementById(feladatok[2]).selectedIndex;
    let jok = 0
    if (megold1 == megoldasok[0]) {
        jok++;
    }
    if (megold2 == megoldasok[1]) {
        jok++;
    }
    if (megold3 == megoldasok[2]) {
        jok++;
    }

    if (jok != "3" && megold1 != megoldasok[0]) {
        alert(`A megoldásaid hibát tartalmaznak, nem mehetsz tovább.Fontos, hogy a feltett kérdéseket hibátlanul megoldd. Nem rontottad el a formátumot az első kérdésben?`);
    }
    else if (jok != "3") {
        alert(`A megoldásaid hibát tartalmaznak, nem mehetsz tovább.Fontos, hogy a feltett kérdéseket hibátlanul megoldd. Nézd át a tananyagot párszor!`);
    }
    else {
        alert("Helyes az összes válaszod, gratulálok!");
        esszefeladat(fel_szam);
    }
}
function esszefeladat(fel_szam) {
    switch (fel_szam) {
        case (fel_szam = 1):
            essze = (`
    <form method="post" action="http://szamtud.uni-corvinus.hu/receive.php" onSubmit="elkuld()">
        <label for="essze_m_vh">Írj rövidern egy esszét Magyarország
        2.világháborúba sodródásáról. Ügyelj az esszéírás szabályaira</label>
        <textarea id="essze_m_vh" rows="25" name="essze"></textarea>
        <p class="gomb_rendezes"><input type="submit" value="Elküldöm az esszét!" class="gombok"></p>
    </form>`);
            document.getElementById("a_teszt").innerHTML = essze;
            break;
        case (fel_szam = 2):
            essze = (`
    <form method="post" action="http://szamtud.uni-corvinus.hu/receive.php" onSubmit="elkuld()">
        <label for="essze_m_vh">Írj röviden egy esszét Mária Terézia uralkodásáról. Ügyelj az esszéírás szabályaira</label>
        <textarea id="essze_m_vh" rows="25" name="essze"></textarea>
        <p class="gomb_rendezes"><input type="submit" value="Elküldöm az esszét!" class="gombok"></p>
    </form>`);
            document.getElementById("a_teszt").innerHTML = essze;
            break;
        case (fel_szam = 3):
            essze = (`
    <form method="post" action="http://szamtud.uni-corvinus.hu/receive.php" onSubmit="elkuld()">
        <label for="essze_varosok">Írj röviden egy esszét a közpékori városok létrejöttéről, társadalmáról. Ügyelj az esszéírás szabályaira</label>
        <textarea id="essze_varosok" rows="25" name="essze"></textarea>
        <p class="gomb_rendezes"><input type="submit" value="Elküldöm az esszét!" class="gombok"></p>
    </form>`);
            document.getElementById("a_teszt").innerHTML = essze;
            break;
        case (fel_szam = 4):
            essze = (`
    <form method="post" action="http://szamtud.uni-corvinus.hu/receive.php" onSubmit="elkuld()">
        <label for="essze_athen">Írj röviden egy esszét az athéni demokrácia működéséről Szolón és Periklész idejéből. Ügyelj az esszéírás szabályaira</label>
        <textarea id="essze_athen" rows="25" name="essze"></textarea>
        <p class="gomb_rendezes"><input type="submit" value="Elküldöm az esszét!" class="gombok"></p>
    </form>`);
            document.getElementById("a_teszt").innerHTML = essze;
            break;
    }
}
function elkuld() {
    alert("A válaszodat rögzítettük.");
}

function letrehoz(){
    let kep = document.getElementById("mem").value;
    if (kep != ""){
    document.getElementById("memed").innerHTML = kep;
    }
}