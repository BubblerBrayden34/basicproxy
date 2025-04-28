document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    
    // Use your Glitch proxy
    const proxyBaseUrl = "https://heliotrope-synonymous-player.glitch.me/";

    // Generate the proxy link by appending the URL
    const proxyUrl = proxyBaseUrl + encodeURIComponent(urlInput);

    // Display the proxy link
    const resultDiv = document.getElementById('result');
    const proxyLink = document.getElementById('proxyLink');
    proxyLink.href = proxyUrl;
    proxyLink.textContent = proxyUrl;
    resultDiv.classList.remove('hidden');
});
