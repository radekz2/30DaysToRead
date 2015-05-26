// Saves options to chrome.storage
function save_options() {
  var purgeTime = document.getElementById('purge_time').value;
  var purge = document.getElementById('purge').checked;
  chrome.storage.sync.set({
    purgeTime: purgeTime,
    purge: purge
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    purgeTime: 25920000,
    purge: true
  }, function(items) {
    document.getElementById('purge_time').value = items.purgeTime;
    document.getElementById('purge').checked = items.purge;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);