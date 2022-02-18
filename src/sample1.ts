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
  lastName: 'Smith',
  age: Factory.each((i) => 20 + (i % 10)),
});

/**
 * メイン処理
 */
const main = () => {
  // 1件生成
  const obj = sampleDataFactory.build();
  console.log(`id:${obj.id}, fistName:${obj.firstName}`);

  // 複数件生成
  const items = sampleDataFactory.buildList(2);
  console.log(`items.length:${items.length}`);
  console.log(`items[0] - id:${items[0].id}, fistName:${items[0].firstName}`);
  console.log(`items[1] - id:${items[1].id}, fistName:${items[1].firstName}`);
};

// メイン処理実行
main();
