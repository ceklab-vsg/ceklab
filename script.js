javascript
function cekLab() {
  const nama = document.getElementById("namaPasien").value;
  const umur = document.getElementById("umur").value;
  const penyakit = document.getElementById("penyakit").value;
  const gula = parseFloat(document.getElementById("gulaDarah").value);
  const kol = parseFloat(document.getElementById("kolesterol").value);
  const asam = parseFloat(document.getElementById("asamUrat").value);

  let hasil = `<h2>Hasil Cek Lab untuk ${nama} (Umur: ${umur})</h2>`;
  hasil += `<p>Penyakit/Keluhan: <strong>${penyakit}</strong></p>`;

  // Nilai rujukan berdasarkan penyakit
  let gulaNormal = [70, 140];
  let kolNormal = [0, 200];
  let asamNormal = [3.5, 7.0];

  if (penyakit === "diabetes") {
    gulaNormal = [80, 130];
  } else if (penyakit === "hipertensi") {
    kolNormal = [0, 190];
  } else if (penyakit === "asam_urat") {
    asamNormal = [3.5, 6.5];
  }

  hasil += `<p>Gula Darah: ${gula} mg/dL (${cekNilai(gula, gulaNormal)} – Normal: ${gulaNormal[0]}–${gulaNormal[1]})</p>`;
  hasil += `<p>Kolesterol: ${kol} mg/dL (${cekNilai(kol, kolNormal)} – Normal: <${kolNormal[1]})</p>`;
  hasil += `<p>Asam Urat: ${asam} mg/dL (${cekNilai(asam, asamNormal)} – Normal: ${asamNormal[0]}–${asamNormal[1]})</p>`;

  document.getElementById("hasil").innerHTML = hasil;
}

function cekNilai(nilai, [min, max]) {
  if (nilai < min) return "Rendah";
  else if (nilai > max) return "Tinggi";
  else return "Normal";
}