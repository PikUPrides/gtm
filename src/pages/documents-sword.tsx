import Header from '../components/Header.jsx';

export default function Page() {
  const content = "<ol><li><p>Half the price</p></li><li><p>No surge pricing</p></li><li><p>Transparency</p></li><li><p>Low margin and high volume</p></li></ol>";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sword</h1>
          <p className="text-gray-500">AYRO's competitive advantages</p>
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}