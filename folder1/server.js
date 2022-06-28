 src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
      integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
      crossorigin=""

      const map = L.map("issMap").setView([0, 0], 1);

      const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
      async function getData() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        document.getElementById("lat").textContent = latitude;
        document.getElementById("lon").textContent = longitude;
      }
      getData();