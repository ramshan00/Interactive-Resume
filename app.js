
var _a, _b, _c;
// Function to toggle visibility of sections
function toggleSection(sectionId, buttonId, showText, hideText) {
    var section = document.getElementById(sectionId);
    var button = document.getElementById(buttonId);
    if (section && button) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
            button.textContent = hideText;
        }
        else {
            section.style.display = 'none';
            button.textContent = showText;
        }
    }
}
(_a = document.getElementById('toggle-skills-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    toggleSection('skills-list', 'toggle-skills-btn', 'Show Skills', 'Hide Skills');
});
(_b = document.getElementById('toggle-education-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    toggleSection('education-list', 'toggle-education-btn', 'Show Education', 'Hide Education');
});
(_c = document.getElementById('toggle-work-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    toggleSection('work-list', 'toggle-work-btn', 'Show Work Experience', 'Hide Work Experience');
});
