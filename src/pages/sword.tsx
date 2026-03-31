import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackLink />
      
      <div className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sword</h1>
          <p className="text-gray-500">AYRO's competitive advantages</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <ul>
            <li>Half the price</li>
            <li>No surge pricing</li>
            <li>Transparency</li>
            <li>Low margin and high volume</li>
          </ul>
        </div>
      </div>
    </div>
  );
}