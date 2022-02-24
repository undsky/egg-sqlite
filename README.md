# egg-sqlite

> Egg plugin for sqlite


## 安装

```bash
$ npm i egg-database-sqlite --save
# or
$ yarn add egg-database-sqlite
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[better-sqlite3](https://github.com/JoshuaWise/better-sqlite3)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.sqlite = {
  enable: true,
  package: 'egg-sqlite',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.sqlite = {
    default: {
        path: ':memory:',
        options: null
    },
    // 单实例
    client: {
        path: ':memory:',
        options: null    
    },
    // 多实例
    clients: {
       db1: {
          path: ':memory:',
          options: null   
       },
    }
};
```

## 示例

```js
const db1 = app.sqlite.get('db1');
// 获取数据库连接对象
const connection = db1.connection;
// 运行 SQL
await db1.run(sql);
// 单条查询
await db1.select(sql);
// 多条查询
await db1.selects(sql);
// 插入
await db1.insert(sql);
// 更新
await db1.update(sql);
// 删除
await db1.del(sql);
// 简单事务
await db1.transaction([sql1,sql2,sql2]);
```
## [查看更多项目](https://www.undsky.com)

## License

[MIT](LICENSE)