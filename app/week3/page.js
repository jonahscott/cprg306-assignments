import ItemList from './item-list';

function Page() {
    return (
        <main className="max-w-2xl mx-auto mt-12 p-4 bg-gray-200 shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-black">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;
