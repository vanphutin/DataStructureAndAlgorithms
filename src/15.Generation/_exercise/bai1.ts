function XauNhiPhanKeTiep(s: string): void {
  let arr: string[] = s.split("");

  function sinhNhiPhanKeTiep() {
    let i = arr.length - 1;

    while (i >= 0 && arr[i] === "1") {
      arr[i] = "0";
      --i;
    }
    if (i >= 0) {
      arr[i] = "1";
    }
  }

  sinhNhiPhanKeTiep();
  console.log(arr.join(""));
}
XauNhiPhanKeTiep("11111");
