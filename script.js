// ===== BABA APP - BOL BAM - FINAL CODE =====

// AUDIO + VIDEO CONTROL
const babaVideo = document.getElementById('babaVideo');
const babaAudio = document.getElementById('babaAudio');

function playAudio(){ babaAudio.play().catch(()=>alert("assets/audio/om-namah-shivaya.mp3 file add karein")); }
function pauseAudio(){ babaAudio.pause(); }
function stopAudio(){ babaAudio.pause(); babaAudio.currentTime = 0; }

// Tab Switch + Audio Video Stop
function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(babaVideo) babaVideo.pause();
  if(babaAudio) babaAudio.pause();
}

// Voice + Bhajan Button
function speak(text){ const msg = new SpeechSynthesisUtterance(text); msg.lang='hi-IN'; speechSynthesis.speak(msg); }
document.getElementById('voiceBtn').onclick = () => {
  const msgs = ["Happy Sawan", "Om Namah Shivaya", "Har Har Mahadev", "Shree Shivaya Namastubhyam", "Bol Bam Bam"];
  speak(msgs[Math.floor(Math.random()*msgs.length)]);
}
document.getElementById('bhajanBtn').onclick = () => { playAudio(); }

// Emergency Call
function call(num){ window.location.href = `tel:${num}`; }

// DISTRICT WISE PANDA
const pandaData = {
  patna: [{name:"Pandit Ramesh Jha", address:"Kankarbagh, Patna - 800020", mobile:"98XXXXX001"}],
  ranchi: [{name:"Pandit Suresh Pandey", address:"Doranda, Ranchi - 834002", mobile:"98XXXXX002"}],
  deoghar: [{name:"Pandit Mohan Tiwari", address:"Tower Chowk, Deoghar", mobile:"98XXXXX003"}],
  jamalpur: [{name:"Pandit Anil Mishra", address:"Baba Chowk, Jamalpur", mobile:"98XXXXX004"}]
};
function loadPanda(){
  let d = document.getElementById('districtSelect').value;
  let list = pandaData[d] || [];
  document.getElementById('pandaList').innerHTML = list.map(p=>`<div class="card"><b>${p.name}</b><br>🏠 ${p.address}<br>📞 <a href="tel:${p.mobile}">${p.mobile}</a></div>`).join('');
}

// HOTEL + DHARAMSHALA + GAADI + SHIVIR
document.getElementById('dharamshalaList').innerHTML = `<div class="card">Baba Dharamshala - Free - Tower Chowk</div>`;
document.getElementById('hotelList').innerHTML = `<div class="card">Hotel Shivam - ₹800/Night - Station Road</div>`;
document.getElementById('carList').innerHTML = `<div class="card">Bam Taxi - ₹1500 Deoghar-Basukinath - 98XXXXX010</div>`;
document.getElementById('autoList').innerHTML = `<div class="card">E-Rickshaw - ₹20 per person - Mandir Gate</div>`;
document.getElementById('drList').innerHTML = `<div class="card">Dr Camp - Nandan Pahar - 24x7</div>`;
document.getElementById('policeList').innerHTML = `<div class="card">Police Shivir - Tower Chowk</div>`;
document.getElementById('lineStatus').innerText = "Normal - 30 Min Wait";
