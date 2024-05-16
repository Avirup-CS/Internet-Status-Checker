window.addEventListener('load', checkstatusInternet)

const con_status = document.getElementById("constatus");
const ip_status = document.getElementById("ipstatus");
const net_status = document.getElementById("netstatus");

function checkstatusInternet() {

    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')

            .then((response) => response.json())
            .then((data) => {
                con_status.textContent = "Connected";
                ip_status.textContent = data.ip;

                const connection = navigator.connection;
                const netStrength = connection ? connection.downlink + 'Mbps' : 'Unknown';

                net_status.textContent = netStrength;

            })
            .catch(() => {
                con_status.textContent = "Disconnected !!";
                ip_status.textContent = " - ";
                net_status.textContent = " - ";
            })
    }
    else {
        con_status.textContent = "Disconnected !!";
        ip_status.textContent = " - ";
        net_status.textContent = " - ";
    }
}
