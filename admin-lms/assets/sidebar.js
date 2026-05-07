
const sidebarHTML = `
    <aside class="w-64 bg-white border-r border-neutral-200 flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div class="p-6 flex items-center gap-3">
            <div class="w-10 h-10 bg-magenta-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">M</div>
            <span class="font-extrabold text-xl tracking-tight">Magenta<span class="text-magenta-500">LMS</span></span>
        </div>

        <nav class="flex-1 px-4 space-y-1">
            <a href="index.html" id="nav-dashboard" class="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Dashboard
            </a>
            <a href="student-list.html" id="nav-student" class="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                Student
            </a>
            <a href="#" id="nav-courses" class="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                My Courses
            </a>
            <a href="#" id="nav-analytics" class="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Analytics
            </a>
            <a href="payment-history.html" id="nav-payment" class="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Payment History
            </a>

            <!-- Quiz Menu -->
            <div class="relative group">
                <div class="flex items-center justify-between px-4 py-3 text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-xl font-medium transition-all cursor-pointer" onclick="toggleSubmenu('quiz-submenu')">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Quiz
                    </div>
                    <svg class="w-4 h-4 transition-transform" id="quiz-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div id="quiz-submenu" class="hidden mt-1 pl-11 pr-4 space-y-1">
                    <a href="create-quiz.html" class="block px-3 py-2 text-sm text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-lg transition-all">Quiz Formula</a>
                    <a href="quiz-list.html" class="block px-3 py-2 text-sm text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-lg transition-all">Quiz Adult</a>
                    <a href="quiz-list-kidz.html" class="block px-3 py-2 text-sm text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-lg transition-all">Quiz Kidz</a>
                </div>
            </div>

            <!-- Material Menu -->
            <div class="relative group">
                <div class="flex items-center justify-between px-4 py-3 text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-xl font-medium transition-all cursor-pointer" onclick="toggleSubmenu('material-submenu')">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        Material
                    </div>
                    <svg class="w-4 h-4 transition-transform" id="material-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div id="material-submenu" class="hidden mt-1 pl-11 pr-4 space-y-1">
                    <a href="#" class="block px-3 py-2 text-sm text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-lg transition-all">Magenta Adult</a>
                    <a href="material-list-kidz.html" class="block px-3 py-2 text-sm text-neutral-600 hover:text-magenta-600 hover:bg-magenta-50 rounded-lg transition-all">Magenta Kidz</a>
                </div>
            </div>
        </nav>

        <div class="p-4 mt-auto border-t border-neutral-100">
            <button class="w-full flex items-center justify-center gap-2 px-4 py-2 text-neutral-600 hover:text-alert-error hover:bg-neutral-50 rounded-lg transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Logout
            </button>
        </div>
    </aside>
`;

const roleModalHTML = `
    <div id="roleModal" class="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm hidden items-center justify-center z-[100] transition-opacity opacity-0">
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform scale-95 transition-all transition-transform">
            <div class="p-6 border-b border-neutral-100 flex justify-between items-center">
                <h3 class="font-bold text-lg text-neutral-900">Switch Role</h3>
                <button onclick="toggleRoleModal()" class="text-neutral-400 hover:text-neutral-700 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="p-2">
                <a href="../admin-crm/admin-crm.html" class="flex items-center gap-4 p-4 hover:bg-neutral-50 rounded-xl transition-colors w-full text-left group cursor-pointer">
                    <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-blue-100">C</div>
                    <div>
                        <p class="text-sm font-bold text-neutral-900">Superadmin (CRM)</p>
                        <p class="text-xs text-neutral-500">Access customer relationship management</p>
                    </div>
                </a>
                <a href="../admin-lms/index.html" class="flex items-center gap-4 p-4 hover:bg-neutral-50 rounded-xl transition-colors w-full text-left group cursor-pointer">
                    <div class="w-10 h-10 rounded-full bg-magenta-50 text-magenta-600 flex items-center justify-center font-bold text-sm group-hover:bg-magenta-100">L</div>
                    <div>
                        <p class="text-sm font-bold text-neutral-900">Admin LMS</p>
                        <p class="text-xs text-neutral-500">Access learning management system</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
`;

function injectSidebar() {
    const sidebarContainer = document.getElementById('sidebar-magenta');
    if (sidebarContainer) {
        sidebarContainer.outerHTML = sidebarHTML;
        
        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const allLinks = document.querySelectorAll('aside a');
        
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('text-primary-700', 'bg-primary-50', 'font-semibold');
                link.classList.remove('text-neutral-600', 'font-medium');
                
                // If in submenu, open the parent submenu
                const submenu = link.closest('.mt-1');
                if (submenu) {
                    submenu.classList.remove('hidden');
                    const arrowId = submenu.id.replace('submenu', 'arrow');
                    const arrow = document.getElementById(arrowId);
                    if (arrow) arrow.classList.add('rotate-180');
                }
            }
        });
    }

    // Inject Role Modal
    if (!document.getElementById('roleModal')) {
        document.body.insertAdjacentHTML('beforeend', roleModalHTML);
    }
}

window.toggleSubmenu = function(id) {
    const submenu = document.getElementById(id);
    const arrow = document.getElementById(id.replace('submenu', 'arrow'));
    if (submenu) {
        submenu.classList.toggle('hidden');
        if (arrow) arrow.classList.toggle('rotate-180');
    }
};

window.toggleRoleModal = function() {
    const modal = document.getElementById('roleModal');
    if (!modal) return;
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.children[0].classList.remove('scale-95');
            modal.children[0].classList.add('scale-100');
        }, 10);
    } else {
        modal.classList.add('opacity-0');
        modal.children[0].classList.add('scale-95');
        modal.children[0].classList.remove('scale-100');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    }
};

// Auto init on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSidebar);
} else {
    injectSidebar();
}
