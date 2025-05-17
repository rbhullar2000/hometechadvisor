import ArticleList from '@/components/ArticleList';

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Latest Smart Home Reviews</h1>
      <p className="text-gray-600 mb-8">
        Browse our expert articles on smart cameras, doorbells, locks, thermostats and more.
      </p>
      <ArticleList />
    </div>
  );
}