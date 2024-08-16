const brandOptions = {
    name: 'Brand',
    options: [
        'All',
        'Nike',
        'Bata'
    ],
    value: brandValue,
    setValue: setBrandValue,
    roundCls: 'rounded-r-none',
    borderCls: ''
};

const categoryOptions = {
    name: 'Category',
    options: [
        'All',
        'Nike',
        'Bata'
    ],
    roundCls: 'rounded-none',
    borderCls: 'border-x-0'
};

const priceOptions = {
    name: 'Price',
    options: [
        'All',
        'Nike',
        'Bata'
    ],
    roundCls: 'rounded-l-none',
    borderCls: ''
};

const priceSortOptions = {
    name: 'Sort by Price',
    options: [
        'Default',
        'Low to High',
        'High to Low'
    ],
    roundCls: 'rounded-r-none',
    borderCls: ''
};

const dateSortOptions = {
    name: 'Sort by Date',
    options: [
        'Default',
        'Newest',
        'Oldest'
    ],
    roundCls: 'rounded-l-none',
    borderCls: 'border-l-0'
};

export {brandOptions, categoryOptions, priceOptions, priceSortOptions, dateSortOptions}