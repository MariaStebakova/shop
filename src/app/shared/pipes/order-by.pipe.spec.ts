import { OrderByPipe } from "./order-by.pipe"

describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();

    const array = [
        { name: 'Product B', price: 8 },
        { name: 'Product A', price: 3 },
        { name: 'Product C', price: 6 }
    ]

    it('transforms array to be sorted in ascending order by name key', () => {
        const transformedArray = pipe.transform(array, 'name', true);
        expect(transformedArray).toEqual([
            { name: 'Product A', price: 3 },
            { name: 'Product B', price: 8 },
            { name: 'Product C', price: 6 }
        ]);
    });

    it('transforms array to be ordered in descending order by prce key', () => {
        const transformedArray = pipe.transform(array, 'price', false);
        expect(transformedArray).toEqual([
            { name: 'Product B', price: 8 },
            { name: 'Product C', price: 6 },
            { name: 'Product A', price: 3 }
        ]);
    })
})