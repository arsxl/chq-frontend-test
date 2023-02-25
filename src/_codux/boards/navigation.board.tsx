import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Navigation',
    Board: () => (
        <div>
            <nav>
                <a href="/home" className="nav_links">
                    About
                </a>
                <a href="/projects" className="nav_links">
                    Calendar
                </a>
                <a href="/about" className="nav_links">
                    Contact us{' '}
                </a>
            </nav>
        </div>
    ),
});
