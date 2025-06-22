// Minimal commands.js for GitHub Pages testing
// This is a placeholder - the full built file would be much larger

Office.onReady(() => {
    console.log('Commands script loaded from GitHub Pages');
});

// Function that will be called by the add-in commands
function addProjectPrefix(event) {
    console.log('Add project prefix function called');
    
    // Placeholder implementation
    Office.context.mailbox.item.subject.setAsync(
        '[PROJECT] ' + (Office.context.mailbox.item.subject.value || ''),
        (result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
                console.log('Prefix added successfully');
            } else {
                console.error('Failed to add prefix:', result.error);
            }
            event.completed();
        }
    );
}

function selectEmailTemplate(event) {
    console.log('Select email template function called');
    
    // Placeholder implementation
    Office.context.mailbox.item.body.setAsync(
        'This is a test template from GitHub Pages deployment.',
        { coercionType: Office.CoercionType.Text },
        (result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
                console.log('Template applied successfully');
            } else {
                console.error('Failed to apply template:', result.error);
            }
            event.completed();
        }
    );
}

// Register functions
Office.actions.associate("addProjectPrefix", addProjectPrefix);
Office.actions.associate("selectEmailTemplate", selectEmailTemplate);