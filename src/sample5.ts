/**
 * プロパティ追加
 */
import * as Factory from 'factory.ts';

type SampleData = {
  id: number;
};

const sampleDataFactory = Factory.Sync.makeFactory<SampleData>({
  id: Factory.each((i) => i),
});
const nameFactory = Factory.Sync.makeFactory({
  name: 'Kojima',
});

const idAndNameFactory = sampleDataFactory.combine(nameFactory);

const obj = idAndNameFactory.build();
console.log(`obj - id:${obj.id}, name:${obj.name}`);
