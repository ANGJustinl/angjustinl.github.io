// script.js

// Configuration for your services
// Each service object can have:
// - id: A unique identifier (string, no spaces)
// - name: Display name (string)
// - internalUrl: The URL for internal access (string)
// - externalUrl: (Optional) The URL for external access if FRP is used (string)
// - hasFRP: (Optional) Boolean, true if this service has an FRP toggle. Defaults to false.
// - defaultFRPState: (Optional) Boolean, true if FRP should be on by default. Defaults to false. Only used if hasFRP is true.
const servicesConfig = [
    {
        id: 'codeserver',
        name: 'Code Server 👩‍💻',
        internalUrl: 'http://code.zt.angforever.top',
        externalUrl: 'http://code.angforever.top',
        hasFRP: true,
        defaultFRPState: false
    },
    {
        id: 'nas',
        name: 'My NAS 💾',
        internalUrl: 'http://omv.zt.angforever.top'
        // No externalUrl or hasFRP, so no toggle will be shown
    },
    {
        id: 'jellyfin',
        name: 'Jellyfin Media Server 🎬',
        internalUrl: 'http://nas.zt.angforever.top',
        externalUrl: 'http://nas.angforever.top',
        hasFRP: true,
        defaultFRPState: true // Example: Jellyfin FRP is on by default
    },
    {
        id: 'homeassistant',
        name: 'Home Assistant 🏠',
        internalUrl: 'http://home.zt.angforever.top',
        externalUrl: 'http://home.angforever.top',
        hasFRP: true
        // defaultFRPState will be false as it's not specified
    },
    {
        id: 'another-service',
        name: 'Generic Internal Service ⚙️',
        internalUrl: 'http://service.zt.angforever.top'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer) {
        console.error('Services container not found!');
        return;
    }

    // Function to render all services
    function renderServices() {
        servicesContainer.innerHTML = ''; // Clear existing services

        servicesConfig.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';

            const title = document.createElement('h3');
            title.textContent = service.name;
            card.appendChild(title);

            const link = document.createElement('a');
            link.id = `link-${service.id}`;
            link.textContent = `Open ${service.name.split(' ')[0]}`; // Use first word for brevity
            link.target = '_blank'; // Open in new tab
            card.appendChild(link);

            // Initial URL setting and FRP toggle creation
            let currentFRPState = service.defaultFRPState || false; // Default to off if not specified
            if (service.hasFRP) {
                // Load saved state from localStorage
                const savedState = localStorage.getItem(`frp-${service.id}`);
                if (savedState !== null) {
                    currentFRPState = JSON.parse(savedState);
                }

                const toggleContainer = document.createElement('div');
                toggleContainer.className = 'frp-toggle-container';

                const toggleLabelText = document.createElement('span');
                toggleLabelText.textContent = 'Enable External Access (FRP):';
                toggleContainer.appendChild(toggleLabelText);

                const toggleSwitchLabel = document.createElement('label');
                toggleSwitchLabel.className = 'switch';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `toggle-${service.id}`;
                checkbox.checked = currentFRPState;
                checkbox.dataset.serviceId = service.id; // Store service id for easy access

                const slider = document.createElement('span');
                slider.className = 'slider';

                toggleSwitchLabel.appendChild(checkbox);
                toggleSwitchLabel.appendChild(slider);
                toggleContainer.appendChild(toggleSwitchLabel);
                card.appendChild(toggleContainer);

                // Add event listener for this toggle
                checkbox.addEventListener('change', (event) => {
                    const serviceId = event.target.dataset.serviceId;
                    const associatedLink = document.getElementById(`link-${serviceId}`);
                    const targetService = servicesConfig.find(s => s.id === serviceId);

                    if (targetService && associatedLink) {
                        if (event.target.checked) {
                            associatedLink.href = targetService.externalUrl;
                            localStorage.setItem(`frp-${serviceId}`, 'true');
                        } else {
                            associatedLink.href = targetService.internalUrl;
                            localStorage.setItem(`frp-${serviceId}`, 'false');
                        }
                    }
                });
            }

            // Set initial link href
            if (service.hasFRP && currentFRPState) {
                link.href = service.externalUrl;
            } else {
                link.href = service.internalUrl;
            }

            servicesContainer.appendChild(card);
        });
    }

    // Initial render of services
    renderServices();
});