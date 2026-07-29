
function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function call(num){ window.location.href = `tel:${num}`; }
function speak(text){ const msg = new SpeechSynthesisUtterance(text); msg.lang='hi-IN'; speechSynthesis.speak(msg); }
document.getElementById('voiceBtn').onclick = ()=>speak("Bol Bam Bam");
document.getElementById('bhajanBtn').onclick = ()=>{new Audio('assets/audio/bhajan.mp3').play();}

// DISTRICT WISE PANDA WITH HOME ADDRESS
const pandaData = {
  patna: [{name:"Pandit Ramesh Jha", address:"Kankarbagh, Patna - 800020", mobile:"98XXXXX001"}],
  ranchi: [{name:"Pandit Suresh Pandey", address:"Doranda, Ranchi - 834002", mobile:"98XXXXX002"}],
  deoghar: [{name:"Pandit Mohan Tiwari", address:"Tower Chowk, Deoghar", mobile:"98XXXXX003"}],
  jamalpur: [{name:"Pandit Anil Mishra", address:"Baba Chowk, Jamalpur", mobile:"98XXXXX004"}]
};
function loadPanda(){
  let d = document.getElementById('districtSelect').value;
  let list = pandaData[d] || [];
  document.getElementById('pandaList').innerHTML = list.map(p=>`<div class="card">${p.name}<br>🏠 ${p.address}<br>📞 ${p.mobile}</div>`).join('');
}

// HOTEL + DHARAMSHALA + GAADI DATA
document.getElementById('dharamshalaList').innerHTML = `<div class="card">Baba Dharamshala - Free - Tower Chowk</div>`;
document.getElementById('hotelList').innerHTML = `<div class="card">Hotel Shivam - ₹800/Night - Station Road</div>`;
document.getElementById('carList').innerHTML = `<div class="card">Bam Taxi Service - ₹1500 Deoghar-Basukinath - 98XXXXX010</div>`;
document.getElementById('autoList').innerHTML = `<div class="card">E-Rickshaw Sangh - ₹20 per person - Mandir Gate</div>`;

// DR + POLICE + FIRE SHIVIR
document.getElementById('drList').innerHTML = `<div class="card">Dr Camp - Nandan Pahar - 24x7</div>`;
document.getElementById('policeList').innerHTML = `<div class="card">Police Shivir - Tower Chowk</div>`;
document.getElementById('fireList').innerHTML = `<div class="card">Fire Brigade - DM Office ke paas</div>`;

function openComplaint(){ alert("Shikayat note ho gayi. Dhanyawad."); }
function reportMissing(){ alert("Jankari note ho gayi. Emergency me 112 call karein."); }
