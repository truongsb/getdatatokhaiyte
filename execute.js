setInterval(function(){
 VHV.App.modules[6].reload();
 setTimeout(function(){fnew() }, 3000);
}, 10000);
function convert(url){
$.get( url, function( data ) {
  $( ".result" ).html( data );
  run(data);
});
}
function run(data){
    if(data.search("vận tải")==-1) return "";
  val="";
    d=data.split("</div>");for(i=0;i<d.length;i++){
if (d[i].search("form-inline")>0|d[i].search("Nơi đi: ")>0|d[i].search("Nơi đến: ")>0) val+=lhcus(d[i]);}
console.log(cvjs(val));//thay bằng hàm api
console.log(mapData(datatest));
}
function cvjs(d){
  js={};
  d=d.split(";_");
  js["ho_ten"]=d[0];
  js["nam_sinh"]=d[1];
  js["gioi_tinh"]=d[2];
  js["dien_thoai"]=d[7];
  js["noi_di"]=d[8].replace("Nơi đi: ","");
  js["noi_den"]=d[9].replace("Nơi đến: ","");
  js["so_nha"]=d[6]+" - "+d[5]+" - "+d[4]+" - "+d[3];
  return JSON.stringify(js);
}
function lhcus(a){
if(a.search("background")>0) return "";
a=$.parseHTML((a+"</div>"))[1].innerText;
a=a.split("\n");
a=removeItemAll(a,"");
a=removeItemAll(a," ");
if (a[0].search("Họ tên")>0|a[0].search("Năm sinh")>0|a[0].search("Điện thoại")>0|a[0].search("Giới tính")>0|a[0].search("Số nhà")>0|a[0].search("Tỉnh thành")>0|a[0].search("Quận huyện")>0|a[0].search("Phường xã")>0) {a=a[1]+";_"} 
else if (a[0].search("Nơi đi")>=0|a[0].search("Nơi đến")>=0) {a=a[0]+";_"} 
else a=""; 
return a;
}
function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

t1=[];t2=[];
for (i=5;i<15;i++){
  t1.splice(0,0,$(".table-data tr")[i].getAttribute('data-id'))}
function fnew(){
  for (i=2;i<12;i++){
  t2.splice(0,0,$(".table-data tr")[i].getAttribute('data-id'))}
  r=9;
  while (t1.indexOf(t2[r])==-1&&r>=0) {
    convert($("[data-id="+t2[r]+"] a")[1].href);
    r--;
  }
  t1=t2;
}

const  datatest= {
"ho_ten":"PHAN TUAN HAI",
"nam_sinh":"1989",
"gioi_tinh":"Nam ",
"dien_thoai":"0911011611",
"noi_di":"Phường Tân Bình - Thành phố Đồng Xoài - Tỉnh Bình Phước ",
"noi_den":"Phường 8 - Quận Tân Bình - Thành phố Hồ Chí Minh ",
"so_nha":"1137, Phú Riềng Đỏ - Phường Tân Bình - Thành phố Đồng Xoài - Tỉnh Bình Phước"}
function mapData(data)
{
  const dataXa=
      [{id:"223",id_huyen:"01",id_tinh:"70",ten_xa:"Phường Tân Bình"},{id:"224",id_huyen:"01",id_tinh:"70",ten_xa:"Phường Tân Phú"},{id:"225",id_huyen:"01",id_tinh:"70",ten_xa:"Phường Tân Thiện"},{id:"226",id_huyen:"01",id_tinh:"70",ten_xa:"Phường Tân Xuân"},{id:"227",id_huyen:"01",id_tinh:"70",ten_xa:"Phường Tân Đồng"},{id:"228",id_huyen:"01",id_tinh:"70",ten_xa:"Xã Tiến Hưng"},{id:"229",id_huyen:"01",id_tinh:"70",ten_xa:"Phường Tiến Thành"},{id:"230",id_huyen:"01",id_tinh:"70",ten_xa:"Xã Tân Thành"},{id:"231",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Minh Hưng"},{id:"232",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Minh Long"},{id:"233",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Minh Lập"},{id:"234",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Minh Thành"},{id:"235",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Minh Thắng"},{id:"236",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Nha Bích"},{id:"237",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Quang Minh"},{id:"238",id_huyen:"07",id_tinh:"70",ten_xa:"Thị trấn Chơn Thành"},{id:"239",id_huyen:"07",id_tinh:"70",ten_xa:"Xã Thành Tâm"},{id:"240",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Bình Thắng"},{id:"241",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Bù Gia Mập"},{id:"242",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Phú Nghĩa"},{id:"243",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Phú Văn"},{id:"244",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Phước Minh"},{id:"245",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Đa Kia"},{id:"246",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Đak Ơ"},{id:"247",id_huyen:"20",id_tinh:"70",ten_xa:"Xã Đức Hạnh"},{id:"248",id_huyen:"19",id_tinh:"70",ten_xa:"Xã An Khương"},{id:"249",id_huyen:"19",id_tinh:"70",ten_xa:"Xã An Phú"},{id:"250",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Minh Tâm"},{id:"251",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Minh Đức"},{id:"252",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Phước An"},{id:"253",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Thanh An"},{id:"254",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Thanh Bình"},{id:"255",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Tân Hiệp"},{id:"256",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Tân Hưng"},{id:"257",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Tân Khai"},{id:"258",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Tân Lợi"},{id:"259",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Tân Quan"},{id:"260",id_huyen:"19",id_tinh:"70",ten_xa:"Xã Đồng Nơ"},{id:"261",id_huyen:"08",id_tinh:"70",ten_xa:"Xã Hưng Phước"},{id:"262",id_huyen:"08",id_tinh:"70",ten_xa:"Xã Phước Thiện"},{id:"263",id_huyen:"08",id_tinh:"70",ten_xa:"Xã Thanh Hòa"},{id:"264",id_huyen:"08",id_tinh:"70",ten_xa:"Xã Thiện Hưng"},{id:"265",id_huyen:"08",id_tinh:"70",ten_xa:"Xã Tân Thành"},{id:"266",id_huyen:"08",id_tinh:"70",ten_xa:"Thị Trấn Thanh Bình"},{id:"267",id_huyen:"08",id_tinh:"70",ten_xa:"Xã Tân Tiến"},{id:"268",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Bình Sơn"},{id:"269",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Bình Tân"},{id:"270",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Bù Nho"},{id:"271",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Long Bình"},{id:"272",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Long Hà"},{id:"273",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Long Hưng"},{id:"274",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Long Tân"},{id:"275",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Phú Riềng"},{id:"276",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Phú Trung"},{id:"277",id_huyen:"09",id_tinh:"70",ten_xa:"Xã Phước Tân"},{id:"278",id_huyen:"04",id_tinh:"70",ten_xa:"Phường Long Phước"},{id:"279",id_huyen:"04",id_tinh:"70",ten_xa:"Phường Long Thủy"},{id:"280",id_huyen:"04",id_tinh:"70",ten_xa:"Phường Phước Bình"},{id:"281",id_huyen:"04",id_tinh:"70",ten_xa:"Phường Sơn Giang"},{id:"282",id_huyen:"04",id_tinh:"70",ten_xa:"Phường Thác Mơ"},{id:"283",id_huyen:"04",id_tinh:"70",ten_xa:"Xã Long Giang"},{id:"284",id_huyen:"04",id_tinh:"70",ten_xa:"Xã Phước Tín"},{id:"285",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc An"},{id:"286",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Hiệp"},{id:"287",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Hòa"},{id:"288",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Hưng"},{id:"289",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Khánh"},{id:"290",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Phú"},{id:"291",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Quang"},{id:"292",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Thiện"},{id:"293",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Thuận"},{id:"294",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Thành"},{id:"295",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Thái"},{id:"296",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Thạnh"},{id:"297",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Thịnh"},{id:"298",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Tấn"},{id:"299",id_huyen:"03",id_tinh:"70",ten_xa:"Thị trấn Lộc Ninh"},{id:"300",id_huyen:"03",id_tinh:"70",ten_xa:"Xã Lộc Điền"},{id:"301",id_huyen:"02",id_tinh:"70",ten_xa:"Phường An Lộc"},{id:"302",id_huyen:"02",id_tinh:"70",ten_xa:"Phường Hưng Chiến"},{id:"303",id_huyen:"02",id_tinh:"70",ten_xa:"Phường Phú Thịnh"},{id:"304",id_huyen:"02",id_tinh:"70",ten_xa:"Phường Phú Đức"},{id:"305",id_huyen:"02",id_tinh:"70",ten_xa:"Xã Thanh Lương"},{id:"306",id_huyen:"02",id_tinh:"70",ten_xa:"Xã Thanh Phú"},{id:"307",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Thuận Lợi"},{id:"308",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Thuận Phú"},{id:"309",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Tân Hòa"},{id:"310",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Tân Hưng"},{id:"311",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Tân Lập"},{id:"312",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Tân Lợi"},{id:"313",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Tân Phước"},{id:"314",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Tân Tiến"},{id:"315",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Đồng Tiến"},{id:"316",id_huyen:"06",id_tinh:"70",ten_xa:"Thị trấn Tân Phú"},{id:"317",id_huyen:"06",id_tinh:"70",ten_xa:"Xã Đồng Tâm"},{id:"318",id_huyen:"05",id_tinh:"70",ten_xa:"Xã BomBo"},{id:"319",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Bình Minh"},{id:"320",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Minh Hưng"},{id:"321",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Nghĩa Bình"},{id:"322",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Nghĩa Trung"},{id:"323",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Phú Sơn"},{id:"324",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Phước Sơn"},{id:"325",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Thọ Sơn"},{id:"326",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Thống Nhất"},{id:"327",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Đoàn Kết"},{id:"328",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Đak Nhau"},{id:"329",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Đăng Hà"},{id:"330",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Đường 10"},{id:"331",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Đồng Nai"},{id:"332",id_huyen:"05",id_tinh:"70",ten_xa:"Thị trấn Đức Phong"},{id:"333",id_huyen:"05",id_tinh:"70",ten_xa:"Xã Đức Liễu"}];
  const dataHuyen=[
      {HuyenKey:"01",Huyen:"Thành phố Đồng Xoài"},{HuyenKey:"02",Huyen:"Thị xã Bình Long"},{HuyenKey:"03",Huyen:"Huyện Lộc Ninh"},{HuyenKey:"04",Huyen:"Thị xã Phước Long"},{HuyenKey:"05",Huyen:"Huyện Bù Đăng"},{HuyenKey:"06",Huyen:"Huyện Đồng Phú"},{HuyenKey:"07",Huyen:"Huyện Chơn Thành"},{HuyenKey:"08",Huyen:"Huyện Bù Đốp"},{HuyenKey:"09",Huyen:"Huyện Phú Riềng"},{HuyenKey:"19",Huyen:"Huyện Hớn Quản"},{HuyenKey:"20",Huyen:"Huyện Bù Gia Mập"}];

    var ss = data.so_nha.split(' - ');
    var xHuyen = dataHuyen.find(item =>{
        if (item.Huyen === ss[3])
          return item.HuyenKey
        else {
          return -1
        }
      });
    var xXa = dataXa.find(item =>
    {
      if(item.ten_xa===ss[1] && item.id_huyen===xHuyen)
        return item.id
      else {
        return -1;
      }
    });
    data.so_nha = ss[0];
    data.id_xa = xXa.id;
    data.id_huyen = xHuyen.HuyenKey;
    data.id_tinh = "70";
    return data
}