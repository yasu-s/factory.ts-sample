/**
 * ID連番確認
 */
import * as Factory from 'factory.ts';

type SampleData = {
  id: number;
};

const sampleDataFactory = Factory.Sync.makeFactory<SampleData>({
  id: Factory.each((i) => i),
});

const obj1 = sampleDataFactory.build();
const obj2 = sampleDataFactory.build();
console.log(`obj1 - id:${obj1.id}`);
console.log(`obj2 - id:${obj2.id}`);
