export default id => ({
    id,
    name: 'Honest Tea (Organic Honey Green Tea, 59-Ounce Bottle)',
    amazonUrl: 'Honest-Tea-Organic-59-Ounce-Bottle/dp/B00YUJOD1E',
    quantity: 1,
    unit: 'unit',
    source: 'AwesomeLCA Team',
    inputs: [
        {
            name: 'PETE',
            carbonCostPerUnit: 23,
            quantity: 100,
            unit: 'g',
            source: 'openDB',
        },
        {
            name: 'PETE injection molding',
            carbonCostPerUnit: 23,
            quantity: 100,
            unit: 'g',
            source: 'openDB',
        },
        {
            name: 'water',
            carbonCostPerUnit: 23,
            quantity: 59,
            unit: 'oz',
            source: 'openDB',
        },
    ]
});
