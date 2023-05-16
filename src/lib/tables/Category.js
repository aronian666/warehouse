import ActiveRecord from "./ActiveRecord"
export default class Category extends ActiveRecord {
    constructor(category) {
        super(category, { category: Category })
    }
    getCategories(categories = []) {
        return categories.filter(category => category.category_id === this.id)
    }
    static table = "categories"
}