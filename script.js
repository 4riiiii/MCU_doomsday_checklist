// ============================================================
// WHAT THIS FILE DOES, IN PLAIN ENGLISH:
// Every time someone checks or unchecks a box, we save the
// current state of ALL checkboxes into the browser's
// localStorage. Every time the page loads, we read that saved
// state back and re-check whichever boxes were checked before.
// This only remembers on the ONE device/browser it was checked
// on — it doesn't sync anywhere or need the internet.
// ============================================================

// grabs every checkbox on the page as a list we can loop over
var checkboxes = document.querySelectorAll('.entry-check');

// ------------------------------------------------------------
// SAVE: builds a simple object like { e1: true, e2: false, ... }
// and stores it under one key, "mcuWatchlist", in localStorage.
// localStorage only stores TEXT, so we convert the object to a
// JSON string with JSON.stringify() before saving it.
// ------------------------------------------------------------
function saveProgress(){
    var state = {};
    checkboxes.forEach(function(box){
        state[box.id] = box.checked; // e.g. state["e1"] = true
    });
    localStorage.setItem('mcuWatchlist', JSON.stringify(state));
}

// ------------------------------------------------------------
// LOAD: reads that same key back out, converts the JSON string
// back into a real object with JSON.parse(), and applies it to
// each checkbox. Runs once, immediately, when the page loads.
// ------------------------------------------------------------
function loadProgress(){
    var saved = localStorage.getItem('mcuWatchlist');
    if (!saved) return; // nothing saved yet (first-ever visit) — nothing to load

    var state = JSON.parse(saved);
    checkboxes.forEach(function(box){
        if (state[box.id]) {
            box.checked = true; // setting this also triggers all your existing CSS :checked styling automatically
        }
    });
}

// ------------------------------------------------------------
// WIRE IT UP
// ------------------------------------------------------------
loadProgress(); // run once on page load, restores previous state

// re-save every single time ANY checkbox changes
checkboxes.forEach(function(box){
    box.addEventListener('change', saveProgress);
});