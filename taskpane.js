// Minimal taskpane.js for GitHub Pages testing
// This is a placeholder - the full built file would be much larger

Office.onReady((info) => {
    if (info.host === Office.HostType.Outlook) {
        document.getElementById('app-loading').innerHTML = '<div>Project Email Prefix Add-in Loaded Successfully!</div><div>GitHub Pages deployment working.</div>';
        console.log('Outlook add-in loaded successfully');
    }
});

// Placeholder for React app initialization
console.log('Taskpane script loaded from GitHub Pages');