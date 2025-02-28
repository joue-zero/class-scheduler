import { format } from "date-fns";

function Footer() {
    return (
        <footer className="w-full z-20 bg-gray-900 text-white text-center p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Copyright */}
                <p className="text-sm">&copy; {format(new Date(), "yyyy")} Class Scheduler</p>

                {/* Social Links */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/elnaggar-youssef"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-blue-400 transition text-sm">
                        🔗 LinkedIn
                    </a>
                    <a href="https://github.com/joue-zero"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-gray-400 transition text-sm">
                        💻 GitHub
                    </a>
                    <a href="https://buymeacoffee.com/youssef.elnaggar"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-500 transition text-xs text-sm">
                        ☕ Buy Me a Coffee
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
