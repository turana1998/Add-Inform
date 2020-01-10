let tbl = document.getElementsByTagName("table")[0];
let h1 = document.getElementsByTagName("h1")[0];
let inp1 = document.getElementsByTagName("input")[0];
let inp2 = document.getElementsByTagName("input")[1];
let inp3 = document.getElementsByTagName("input")[2];
let inp4 = document.getElementsByTagName("input")[3];
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let all=document.getElementById("all");
btn1.onclick =function () {
    all.style.display = "block";
}
    
class Sirket{
    isciler = [
        ["Məhəmməd Rəhimov","Ələkbər Nağıyev","İlkin Salamov","Turanə İsmayılova"],
        ["Web Developer","Laravel Developer","Front End Developer","Back End Developer"],
        ["2001","1999","2500","3000"],
        ["Q.Qarayev 81","Naxçıvanski 47","7 ci Mİkrorayon","Bayıl Qəsəbəsi"]
    ];

    constructor(ad){
        this.ad = ad;
    }
    Elave() {
        if (inp1.value == "" || inp2.value == "" || inp3.value == "") {
            alert("Xaiş olunur məlumatları tam daxil edin!");
            return this.IscilerinSiyahisi();
        }
        else {
            this.isciler[0].push(inp1.value);
            this.isciler[1].push(inp2.value);
            this.isciler[2].push(inp3.value);
            this.isciler[3].push(inp4.value);
            return this.IscilerinSiyahisi();
        }
    }
    IscilerinSiyahisi() {
        let tbl =`
            <tr>
                <th>Ad Soyad</th>
                <th>Vəzifə</th>
                <th>Maaş (Aylıq AZN)</th>
                <th>Maaş (Aylıq USD)</th>
                <th>Maaş (İllik AZN)</th>
                <th>Maaş (İllik USD)</th>
                <th>Ünvan</th>
            </tr>
        `;
        for(let i = 0; i<this.isciler[0].length;i++){
            tbl +=`
                <tr>
                    <td>${this.isciler[0][i]}</td>
                    <td>${this.isciler[1][i]}</td>
                    <td>${this.isciler[2][i]} AZN</td>
                    <td>${Math.round(this.isciler[2][i]/1.7)} USD</td>
                    <td>${this.isciler[2][i]*12} AZN</td>
                    <td>${Math.round(this.isciler[2][i]/1.7)*12} USD</td>
                    <td>${this.isciler[3][i]} AZN</td>
                </tr>
            `;
        }
        return tbl;
    }
}

let yup = new Sirket("Yup Technology");
function DaxilEt() {
    tbl +=`
    <tr>
        <td>${Document.getElementsByTagName("input")[0].value}</td>
        <td>${Document.getElementsByTagName("input")[1].value}</td>
        <td>${Document.getElementsByTagName("input")[2].value} AZN</td>
        <td>${Math.round((Document.getElementsByTagName("input")[2].value)/1.7)} USD</td>
        <td>${Document.getElementsByTagName("input")[2].value*12} AZN</td>
        <td>${Math.round((Document.getElementsByTagName("input")[2].value)/1.7)*12} USD</td>
        <td>${Document.getElementsByTagName("input")[3].value}</td>

    </tr>
`;
     return tbl;
}
onload = function(){

    let h1 = this.document.getElementsByTagName("h1")[0];
    let tbl = this.document.getElementsByTagName("table")[0];

    h1.innerHTML = yup.ad;
    tbl.innerHTML = yup.IscilerinSiyahisi();

}

btn2.onclick = function () {
    tbl.innerHTML = yup.Elave();
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    inp4.value = "";
    all.style.display = "none";
}
