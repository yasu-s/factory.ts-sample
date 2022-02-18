/**
 * プロパティの上書き
 */
import * as Factory from 'factory.ts';

type SampleData = {
  firstName: string;
  lastName: string;
};

const sampleDataFactory = Factory.Sync.makeFactory<SampleData>({
  firstName: 'Bob',
  lastName: 'Kojima',
});

const obj = sampleDataFactory.build({ lastName: 'Goto' });
console.log(`obj - name:${obj.lastName} ${obj.firstName}`);
