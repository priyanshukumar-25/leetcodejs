 const cache = new TTLCache(5000);
 cache.set("user:1", { name: "Priyanshu"});
 cache.set("session:abc", "token123", 2000);

 cache.get("session:abc");