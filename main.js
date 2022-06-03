// Bài 1: Tính tiền lương nhân viên
document.getElementById('btnTinhTien').onclick = function () {
    var luongNgay = document.getElementById('luongNgay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var soTienLuong = 0;
    soTienLuong = luongNgay * soNgayLam;
    document.getElementById('soTienLuong').innerHTML = soTienLuong + '$';
}

//Bài 2: Tính giá trị trung bình
document.getElementById('btnTinhTB').onclick = function () {
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;
    var giaTriTrungBinh = 0;
    giaTriTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
    document.getElementById('ketQuaTB').innerHTML = giaTriTrungBinh;
}


// Bài 3: Quy đổi tiền
document.getElementById('btnQuyDoi').onclick = function () {
    var tyGia = document.getElementById('tyGia').value;
    var soTienUSD = document.getElementById('soTienUSD').value;
    var soTienVND = 0;
    soTienVND = tyGia * soTienUSD;
    document.getElementById('soTienVND').innerHTML = soTienVND + ' VND';
}


// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById('btnTinhToan').onclick = function () {
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var dienTich = 0;
    var chuVi = 0;
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('dienTich').innerHTML = dienTich;
    document.getElementById('chuVi').innerHTML = chuVi;
}


// Bài 5: Tính tổng 2 ký số 
document.getElementById('btnTinhTong').onclick = function () {
    var number = +document.getElementById('number').value;
    var chuSoHangChuc = 0;
    var chuSoHangDonVi = 0;
    var tong2KySo = 0;
    chuSoHangChuc = Math.floor(number % 100 / 10);
    chuSoHangDonVi = number % 10;
    tong2KySo = chuSoHangChuc + chuSoHangDonVi;
    document.getElementById('tong').innerHTML = tong2KySo;
}
