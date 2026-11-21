import categories from './Category.json';

export function getCategoryName(categoryId) {
    return categories.find((category) => category.categoryId === categoryId)?.categoryName ?? 'Unknown category';
}
