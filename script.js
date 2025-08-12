function tampilkanFoto() {
  const divFoto = document.getElementById('foto');
  const sudahAdaGambar = document.getElementById('foto-kenangan');

  // Cek apakah gambar sudah ditambahkan sebelumnya
  if (!sudahAdaGambar) {
    const img = document.createElement('img');
    

    divFoto.appendChild(img);
  }

  // Tampilkan div foto (jika sebelumnya tersembunyi)
  divFoto.style.display = 'block';
}

function kirimPesan(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;
  let tujuan = document.getElementById("tujuan").value;

  if (!tujuan) {
    document.getElementById("konfirmasi").innerHTML = "Pilih penerima dulu!";
    document.getElementById("konfirmasi").style.color = "red";
    return;
  }

  let teks = `Halo, saya ${nama} (${email}).%0A${pesan}`;
  let url = `https://wa.me/62${tujuan.substring(1)}?text=${teks}`;

  window.open(url, "_blank");
  document.getElementById("konfirmasi").innerHTML = "Membuka WhatsApp...";
  document.getElementById("konfirmasi").style.color = "green";
}

document.querySelector("#kontak button").addEventListener("click", function (e) {
  let ripple = document.createElement("span");
  ripple.style.left = (e.clientX - e.target.offsetLeft) + "px";
  ripple.style.top = (e.clientY - e.target.offsetTop) + "px";
  ripple.classList.add("ripple");
  this.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

