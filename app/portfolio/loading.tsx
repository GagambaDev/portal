export default function Loading() {
    return (
        // Overall background we paste HTML elements on.
        <div className="min-h-screen bg-background px-6 py-12">
            <header className="mb-10 flex flex-col min-[821px]:flex-row animate-pulse h-24"
                style={{backgroundColor: 'var(--violet-soft, green)'}}> 
            </header>
        </div>
    );
}