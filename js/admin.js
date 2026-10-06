function renderMasterAdminTable() {
    const tbody = document.getElementById("masterTableBody");
    if (!tbody) return;

    const data = JSON.parse(localStorage.getItem("tr_songs")) || [];
    tbody.innerHTML = "";

    data.forEach((song, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><b>${song.title}</b></td>
            <td>${song.artist}</td>
            <td>${song.date}</td>
            <td><span class="status status-${song.status.toLowerCase()}">${song.status}</span></td>
            <td>
                ${song.status === 'Pending' ? `
                    <div class="action-btns">
                        <button class="btn-sm btn-approve" onclick="updateTrackStatus(${index}, 'Approved')">Approve</button>
                        <button class="btn-sm btn-reject" onclick="updateTrackStatus(${index}, 'Rejected')">Reject</button>
                    </div>
                ` : `<span style="color: var(--text-muted); font-size: 12px;">Completed</span>`}
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateTrackStatus(index, newStatus) {
    const songs = JSON.parse(localStorage.getItem("tr_songs")) || [];
    songs[index].status = newStatus;
    localStorage.setItem("tr_songs", JSON.stringify(songs));
    renderMasterAdminTable();
}

document.addEventListener("DOMContentLoaded", () => {
    renderMasterAdminTable();
});
