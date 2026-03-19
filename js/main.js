(() => {
    const pageSections = ['price-plans', 'my-services', 'recommendations'];

    // Load all sections and render them in the order declared above.
    const loadSections = async () => {
        const results = await Promise.allSettled(
            pageSections.map((sectionName) => getFileContent(sectionName))
        );

        const fragment = document.createDocumentFragment();
        const failedSections = [];

        results.forEach((result, index) => {
            const sectionName = pageSections[index];

            if (result.status === 'fulfilled') {
                fragment.append(result.value);
            } else {
                failedSections.push(sectionName);
                console.error(result.reason?.message || `Failed to load ${sectionName}`);
            }
        });

        document.body.append(fragment);

        if (failedSections.length > 0) {
            const warning = document.createElement('p');
            warning.textContent =
                'Some sections could not be loaded: ' + failedSections.join(', ');
            warning.style.color = '#b91c1c';
            warning.style.padding = '0 2.5rem 1rem';
            document.body.append(warning);
        }
    };

    loadSections();
})();