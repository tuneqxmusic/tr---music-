const initialData = [
    { title: "Dil Ki Batein", artist: "Rohan Sharma", isrc: "IN-TRM-26-00102", date: "2026-10-05", status: "Pending" },
    { title: "Tere Bina", artist: "Deepak Kumar", isrc: "IN-TRM-26-00103", date: "2026-10-06", status: "Approved" }
];

function renderSubAdminTable() {
    const tbody = document.getElementById("clientTableBody");
    if (!tbody) return;

    const data = JSON.parse(localStorage.getItem("tr_songs")) || initialData;
    tbody.innerHTML = "";

    data.forEach(song => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><b>${song.title}</b></td>
            <td>${song.artist}</td>
            <td><code>${song.isrc}</code></td>
            <td>${song.date}</td>
            <td><span class="status status-${song.status.toLowerCase()}">${song.status}</span></td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("tr_songs")) {
        localStorage.setItem("tr_songs", JSON.stringify(initialData));
    }
    renderSubAdminTable();

    const form = document.getElementById("songUploadForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("songTitle").value;
            const artist = document.getElementById("songArtist").value;
            
            const songs = JSON.parse(localStorage.getItem("tr_songs")) || [];
            songs.push({
                title: title,
                artist: artist,
                isrc: `IN-TRM-26-00${Math.floor(100 + Math.random() * 900)}`,
                date: new Date().toISOString().split('T')[0],
                status: "Pending"
            });

            localStorage.setItem("tr_songs", JSON.stringify(songs));
            document.getElementById("uploadModal").style.display = "none";
            renderSubAdminTable();
            alert("Song Submitted Successfully to Sandeep Kumar!");
        });
    }
});
