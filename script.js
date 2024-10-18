"use strict";
function toggleMenu() {
    const menu = document.getElementById('toggle-menu');
    const overlay = document.getElementById('overlay');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('hidden');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.toggle('active');
}
