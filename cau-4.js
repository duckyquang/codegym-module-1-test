class DienThoai {
    constructor(maDienThoai, ten, hangSanXuat, gia) {
        this._maDienThoai = maDienThoai;
        this._ten = ten;
        this._hangSanXuat = hangSanXuat;
        this._gia = gia;
    }

    get maDienThoai() {
        return this._maDienThoai;
    }
    set maDienThoai(maDienThoai) {
        this._maDienThoai = maDienThoai;
    }
    get ten() {
        return this._ten;
    }
    set ten(ten) {
        this._ten = ten;
    }
    get hangSanXuat() {
        return this._hangSanXuat;
    }
    set hangSanXuat(hangSanXuat) {
        this._hangSanXuat = hangSanXuat;
    }
    get gia() {
        return this._gia;
    }
    set gia(gia) {
        this._gia = gia;
    }
    toString() {
        return `Mã điện thoại: ${this._maDienThoai}, Tên: ${this._ten}, Hãng: ${this._hangSanXuat}, Giá: ${this._gia} VND`;
    }
}

function quanLyDienThoai() {
    let danhSachDienThoai = [];
    let soLuong = parseInt(prompt("Nhập số lượng điện thoại muốn thêm: "), 10);

    for (let i = 0; i < soLuong; i++) {
        let maDienThoai = prompt(`Nhập mã điện thoại cho điện thoại thứ ${i + 1}:`);
        let ten = prompt(`Nhập tên điện thoại cho điện thoại thứ ${i + 1}:`);
        let hangSanXuat = prompt(`Nhập hãng sản xuất cho điện thoại thứ ${i + 1}:`);
        let gia = parseFloat(prompt(`Nhập giá cho điện thoại thứ ${i + 1} (VND):`));
        let dienThoai = new DienThoai(maDienThoai, ten, hangSanXuat, gia);
        danhSachDienThoai.push(dienThoai);
    }

    danhSachDienThoai.sort((a, b) => a.ten.localeCompare(b.ten));
    let ketQua = "Danh sách điện thoại đã sắp xếp theo tên:\n";
  
    for (let dienThoai of danhSachDienThoai) {
        ketQua += dienThoai.toString() + "\n";
    }

    alert(ketQua);
}

quanLyDienThoai();
