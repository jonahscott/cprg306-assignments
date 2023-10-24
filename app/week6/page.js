import ItemList from './item-list';

function Page() {
    return (
        <main className="max-w-2xl mx-auto mt-12 p-4 bg-gray-200 shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-black">Shopping List</h1>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2 text-black">Sort by:</h2>
                <ItemList />
            </div>
        </main>
    );
}

export default Page;
