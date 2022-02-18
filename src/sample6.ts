/**
 * Factoryをネスト
 */
import * as Factory from 'factory.ts';

type SampleData1 = {
  name: string;
};

type SampleData2 = {
  data: SampleData1;
  items: SampleData1[];
};

const sampleData1Factory = Factory.Sync.makeFactory<SampleData1>({
  name: 'Nagane',
});

const sampleData2Factory = Factory.Sync.makeFactory<SampleData2>({
  data: sampleData1Factory.build(),
  items: sampleData1Factory.buildList(2),
});

const obj = sampleData2Factory.build();
console.log(`obj.data - name:${obj.data.name}`);
console.log(`obj.items[0] - name:${obj.items[0].name}`);
console.log(`obj.items[1] - name:${obj.items[1].name}`);
