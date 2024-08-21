function xuLyMang() {
    const MAX_ELEMENTS = 20;
    let soPhanTu = parseInt(prompt("Nhập vào số lượng phần tử (tối đa 20):"), 10);
  
    if (isNaN(soPhanTu) || soPhanTu > MAX_ELEMENTS || soPhanTu <= 0) {
        alert("Vui lòng nhập vào một số hợp lệ từ 1 đến 20.");
        return;
    }
  
    let mang = [];
    for (let i = 0; i < soPhanTu; i++) {
        let phanTu = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`), 10);

        if (isNaN(phanTu)) {
            alert("Vui lòng nhập vào một số nguyên hợp lệ.");
            i--;
        } else {
            mang.push(phanTu);
        }
    }
  
    alert("Mảng bạn đã nhập: " + mang.join(", "));
  
    let tongChan = 0;
    let tongLe = 0;
  
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] % 2 === 0) {
            tongChan += mang[i];
        } else {
            tongLe += mang[i];
        }
    }

    let hieu = tongChan - tongLe;
  
    alert("Tổng các số chẵn: " + tongChan);
    alert("Tổng các số lẻ: " + tongLe);
    alert("Hiệu giữa tổng số chẵn và tổng số lẻ: " + hieu);
}

xuLyMang();
