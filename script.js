  document.getElementById("generate-invoice").addEventListener("click", function () {
            const invoiceData = {
                clientName: document.getElementById("client-name").value,
                address: document.getElementById("address").value,
                contactNumber: document.getElementById("contactNumber").value,
                projectType: document.getElementById("project-type").value,
                landscapeArea: document.getElementById("landscape-area").value,
                buildUpArea: document.getElementById("build-up-area").value,
                siteVisits: document.getElementById("site-visits").value,
                landscapeRate: document.getElementById("landscape-rate").value,
                buildUpRate: document.getElementById("build-up-rate").value,
                siteVisitRate: document.getElementById("site-visit-rate").value,
            };
            localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
            window.location.href = "invoice.html";
        });

         // Register the service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then(() => console.log('Service Worker registered successfully'))
                .catch(err => console.log('Service Worker registration failed:', err));
        }
