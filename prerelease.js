const { execSync } = require('child_process');

function getVersion() {
    try {
        const version = execSync('git describe --tags').toString().trim();
        console.log(`Current version: ${version}`);
    } catch (error) {
        console.error('Error fetching version:', error.message);
    }
}

getVersion();