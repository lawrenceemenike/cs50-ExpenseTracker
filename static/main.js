document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('categoryFilter');
    filterSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        filterExpensesByCategory(selectedCategory);
    });
});

function filterExpensesByCategory(category) {
    const expenses = document.querySelectorAll('.expense-item');
    expenses.forEach(expense => {
        expense.style.display = expense.getAttribute('data-category') === category ? 'block' : 'none';
    });
}
