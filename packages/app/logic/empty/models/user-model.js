import { ObjectModel } from 'objectmodel';

// Example how to define models
// https://github.com/sylvainpolletvillard/ObjectModel

export const EmptyModel = new ObjectModel({
    product: { name: String, quantity: Number },
    orderDate: Date
});
