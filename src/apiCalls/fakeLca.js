export default id => ({
    id,
    name: 'Honest Tea (Organic Honey Green Tea, 59-Ounce Bottle)',
    amazonId: 'B00YUJOD1E',
    unit: 'bottle',
    source: 'AwesomeLCA Team',
    carbonCostPerUnit: 3600,
    parts: [
        {
            id: '123dasf3r2',
            name: 'PETE',
            amazonId: 'B00YUJOD1E',
            carbonCostPerUnit: 23,
            quantity: 100,
            unit: 'g',
            source: 'openDB',
        },
        {
            id: '123dasf3r2',
            name: 'water',
            carbonCostPerUnit: 23,
            quantity: 59,
            unit: 'oz',
            source: 'openDB',
        },
    ]
});
