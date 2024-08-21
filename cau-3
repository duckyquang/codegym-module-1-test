function laSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function locVaSapXepNguyenTo(mang) {
    let mangNguyenTo = [];
    for (let i = 0; i < mang.length; i++) {
        if (laSoNguyenTo(mang[i])) {
            mangNguyenTo.push(mang[i]);
        }
    }

    mangNguyenTo.sort((a, b) => a - b);
  
    return mangNguyenTo;
}

function nhapVaXuLyMang() {
    let chuoiNhap = prompt("Nhập vào một mảng số nguyên (các số cách nhau bởi dấu phẩy):");
    let mangSoNguyen = chuoiNhap.split(",").map(Number);
    let mangNguyenTo = locVaSapXepNguyenTo(mangSoNguyen);

    if (mangNguyenTo.length > 0) {
        alert("Mảng các số nguyên tố đã sắp xếp: " + mangNguyenTo.join(", "));
    } else {
        alert("Không có số nguyên tố nào trong mảng.");
    }
}

nhapVaXuLyMang();
