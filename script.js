// ===== BABA APP - BOL BAM - FINAL CODE =====

// Voice + Bhajan
function speak(text){ 
  const msg = new SpeechSynthesisUtterance(text); 
  msg.lang = 'hi-IN'; 
  speechSynthesis.speak(msg); 
}

document.getElementById('voiceBtn').onclick = () => {
  const msgs = ["Happy Sawan", "Om Namah Shivaya", "Har Har Mahadev", "Shree Shivaya Namastubhyam", "Bol Bam Bam"];
  speak(msgs[Math.floor(Math.random()*msgs.length)]);
}

document.getElementById('bhajanBtn').onclick = () => {
  const audio = new Audio('assets/audio/bhajan.mp3'); 
  audio.play().catch(()=>alert("assets/audio/bhajan.mp3 file add karein"));
}

// Tab Switch
function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Emergency Call
function call(num){ window.location.href = `tel:${num}`; }

// ===== DISTRICT WISE PANDA WITH HOME ADDRESS =====
const pandaData = {
  patna: [
    {name:"Pandit Ramesh Jha", address:"Kankarbagh, Patna - 800020", mobile:"98XXXXX001"},
    {name:"Pandit Sanjay Mishra", address:"Danapur, Patna - 801503", mobile:"98XXXXX005"}
  ],
  ranchi: [
    {name:"Pandit Suresh Pandey", address:"Doranda, Ranchi - 834002", mobile:"98XXXXX002"},
    {name:"Pandit Vinod Sharma", address:"Lalpur, Ranchi - 834001", mobile:"98XXXXX007"}
  ],
  deoghar: [
    {name:"Pandit Mohan Tiwari", address:"Tower Chowk, Deoghar", mobile:"98XXXXX003"},
    {name:"Pandit Ashok Jha", address:"Mandir Gate, Deoghar", mobile:"98XXXXX006"}
  ],
  jamalpur: [
    {name:"Pandit Anil Mishra", address:"Baba Chowk, Jamalpur", mobile:"98XXXXX004"}
  ]
};

function loadPanda(){
  let d = document.getElementById('districtSelect').value;
  let list = pandaData[d] || [];
  if(list.length === 0){
    document.getElementById('pandaList').innerHTML = "<p>Jald hi is district ka data add kiya jayega</p>";
    return;
  }
  document.getElementById('pandaList').innerHTML = list.map(p=>`
    <div class="card">
      <b>${p.name}</b><br>
      🏠 ${p.address}<br>
      📞 <a href="tel:${p.mobile}">${p.mobile}</a>
    </div>
  `).join('');
}

// ===== HOTEL + DHARAMSHALA =====
document.getElementById('dharamshalaList').innerHTML = `
  <div class="card">Baba Dharamshala - Free - Tower Chowk, Deoghar</div>
  <div class="card">Shiv Bhakt Dharamshala - Donation - Nandan Pahar</div>
  <div class="card">Mahadev Dharamshala - Free - Basukinath Road</div>
`;

document.getElementById('hotelList').innerHTML = `
  <div class="card">Hotel Shivam - ₹800/Night - Station Road - 98XXXXX011</div>
  <div class="card">Baba Residency - ₹1200/Night - Tower Chowk - 98XXXXX012</div>
`;

// ===== GAADI: CAR + AUTO + E-RICKSHAW =====
document.getElementById('carList').innerHTML = `
  <div class="card">Bam Taxi Service - ₹1500 Deoghar-Basukinath - 98XXXXX010</div>
  <div class="card">Shiv Car Rental - ₹2000 Full Day - 98XXXXX013</div>
`;

document.getElementById('autoList').innerHTML = `
  <div class="card">E-Rickshaw Sangh - ₹20 per person - Mandir Gate</div>
  <div class="card">Auto Stand - ₹100 Station to Mandir - 98XXXXX014</div>
`;

// ===== DR + POLICE + FIRE SHIVIR =====
document.getElementById('drList').innerHTML = `
  <div class="card">Dr Camp - Nandan Pahar - 24x7</div>
  <div class="card">Medical Camp - Tower Chowk - 9AM to 9PM</div>
`;

document.getElementById('policeList').innerHTML = `
  <div class="card">Police Shivir - Tower Chowk</div>
  <div class="card">Lost & Found - DM Office ke paas</div>
`;

document.getElementById('fireList').innerHTML = `
  <div class="card">Fire Brigade - DM Office ke paas</div>
  <div class="card">Emergency Fire - 101</div>
`;

// ===== SHOP LIST + SEARCH =====
const shops = [
  {name:"Shiv Jal Seva",place:"Mandal House",rate:"Free"},
  {name:"Bam Bhandar",place:"Tower Chowk",rate:"Fair Price"},
  {name:"Mahadev Prasad",place:"Basuki Gate",rate:"Fixed Rate"}
];

document.getElementById('shopSearch').oninput = (e)=>{
  let val = e.target.value.toLowerCase();
  let filtered = shops.filter(s=>s.place.toLowerCase().includes(val) || s.name.toLowerCase().includes(val));
  document.getElementById('shopList').innerHTML = filtered.map(s=>`
    <div class="card">${s.name}<br>📍 ${s.place}<br>Rate: ${s.rate}</div>
  `).join('');
}
document.getElementById('shopList').innerHTML = shops.map(s=>`
  <div class="card">${s.name}<br>📍 ${s.place}<br>Rate: ${s.rate}</div>
`).join('');

// ===== COMPLAINT + MISSING =====
function openComplaint(){ 
  alert("Dhanyawad. Aapki Anonymous Shikayat note ho gayi.\nEmergency ho to 112 call karein."); 
}

function reportMissing(){ 
  let name = prompt("Missing Bam ka Naam?");
  let addr = prompt("Last Location?");
  if(name && addr){
    alert(`Jankari note ho gayi.\nNaam: ${name}\nLocation: ${addr}\n\nEmergency me 112 call karein.`);
  }
}

// ===== PIN POINT PROBLEM SOLVER =====
function reportProblem(problem){
  if(confirm(`${problem} ki shikayat karna chahte ho?`)){
    alert(`Dhanyawad. Aapki baat note kar li gayi.\nIsse hum app me sudhar karenge.\nEmergency ho to 112 call karein.`);
  }
}

// ===== LINE STATUS DUMMY =====
document.getElement
