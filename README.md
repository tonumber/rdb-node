# rdb-node
NPM Module (usage : require('rdb-node') - for my repl-database shit)

discord: https://discord.gg/vZtkJYxe
```const rdb = require('rdb-node')
const db = new rdb("https://db-60.eqkksny7c7vru5h.repl.co")

async function init() {
  await db.set("e","yowassup")
  var test = await db.get("e")
     console.log("this is the key 'e': "+test)
  var test2 = await db.list()
    console.log(test2)
  var test3 = await db.set("abc","def")
    console.log(test3)
  var test4 = await db.delete("e")
    console.log(test4)
  var test5 = await db.get("e")
    console.log("this would be the key 'e' : "+test5)
  var test6 = await db.list()
    console.log(test6)
  var test7 = await db.delall()
    console.log(test7)
  var test8 = await db.list()
    console.log("below will be the db.list.")
    console.log(test8)
}
init()


```
