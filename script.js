function searchMovie() {
    let keyword = document.getElementById("searchInput").value;

    if(keyword.trim() === "") {
        alert("กรุณาพิมพ์คำค้นหา");
    } else {
        alert("กำลังค้นหา: " + keyword);
    }
}