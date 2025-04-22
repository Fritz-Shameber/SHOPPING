let mediaRecorder;
let recordedChunks = [];
let recordings = []; 


document.getElementById("start-record").addEventListener("click", function () {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = function (event) {
                recordedChunks.push(event.data);
            };

            mediaRecorder.onstop = function () {
                let blob = new Blob(recordedChunks, { type: "audio/wav" });
                let audioUrl = URL.createObjectURL(blob);
                let recording = {
                    title: "Recording " + Date.now(),
                    audioUrl: audioUrl,
                    date: new Date().toLocaleString()
                };
                recordings.push(recording);
                updateRecordingsTable(); 
            };

            mediaRecorder.start();
            document.getElementById("start-record").hidden = true;
            document.getElementById("stop-record").hidden = false;
        })
        .catch(function (err) {
            console.error("Error accessing media devices.", err);
        });
});


document.getElementById("stop-record").addEventListener("click", function () {
    if (mediaRecorder) {
        mediaRecorder.stop();
        document.getElementById("start-record").hidden = false;
        document.getElementById("stop-record").hidden = true;
    }
});


function updateRecordingsTable() {
    let recordingsTableBody = document.querySelector(".recordings-container tbody");
    recordingsTableBody.innerHTML = ''; 

    recordings.forEach((recording, index) => {
        let row = document.createElement("tr");

        let titleCell = document.createElement("td");
        titleCell.innerText = recording.title;
        row.appendChild(titleCell);

        let dateCell = document.createElement("td");
        dateCell.innerText = recording.date;
        row.appendChild(dateCell);

        let optionsCell = document.createElement("td");

        let listenButton = document.createElement("button");
        listenButton.classList.add("btn", "btn-success");
        listenButton.innerText = "Listen";
        listenButton.onclick = function () {
            let audio = new Audio(recording.audioUrl);
            audio.play();
        };

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            recordings.splice(index, 1); 
            updateRecordingsTable(); 
        };

        optionsCell.appendChild(listenButton);
        optionsCell.appendChild(deleteButton);
        row.appendChild(optionsCell);

        recordingsTableBody.appendChild(row);
    });
}


document.getElementById("karaoke").addEventListener("click", function () {
    document.querySelector(".karaoke-container").style.display = "block";
    document.querySelector(".recordings-container").style.display = "none";
});

document.getElementById("recordings").addEventListener("click", function () {
    document.querySelector(".karaoke-container").style.display = "none";
    document.querySelector(".recordings-container").style.display = "block";
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }

  
  