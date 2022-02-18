import * as Factory from 'factory.ts';

type SampleData = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

/** SampleData Factory */
const sampleDataFactory = Factory.Sync.makeFactory<SampleData>({
  id: Factory.each((i) => i),
  firstName: 'Bob',
  lastName: 'Kojima',
  age: Factory.each((i) => 20 + (i % 10)),
});

/**
 * メイン処理
 */
const main = () => {
  // 1件生成
  const obj1 = sampleDataFactory.build();
  console.log(`obj1 - id:${obj1.id}, lastName:${obj1.lastName}, age:${obj1.age}`);

  // lastNameを変更
  const obj2 = sampleDataFactory.build({ lastName: 'Goto' });
  console.log(`obj2 - id:${obj2.id}, lastName:${obj2.lastName}, age:${obj2.age}`);

  // 複数件生成
  const items = sampleDataFactory.buildList(2);
  console.log(`items.length:${items.length}`);
  console.log(`items[0] - id:${items[0].id}, lastName:${items[0].lastName}, age:${items[0].age}`);
  console.log(`items[1] - id:${items[1].id}, lastName:${items[1].lastName}, age:${items[1].age}`);
};

// メイン処理実行
main();
