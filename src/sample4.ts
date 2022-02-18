/**
 * 複数件同時生成
 */
import * as Factory from 'factory.ts';

type SampleData = {
  id: number;
  name: string;
};

const sampleDataFactory = Factory.Sync.makeFactory<SampleData>({
  id: Factory.each((i) => i),
  name: 'Kawamoto',
});

const items = sampleDataFactory.buildList(2);
console.log(`items[0] - id:${items[0].id}, name:${items[0].name}`);
console.log(`items[1] - id:${items[1].id}, name:${items[1].name}`);
