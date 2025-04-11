(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{535:function(t,a,s){"use strict";s.r(a);var r=s(30),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"事务概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务概念"}},[t._v("#")]),t._v(" 事务概念")]),t._v(" "),s("p",[t._v("ACID表示原子性（atomicity）、一致性（consistency）、隔离性（isolation）和持久性（durability）。")]),t._v(" "),s("h5",{attrs:{id:"原子性-atomicity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原子性-atomicity"}},[t._v("#")]),t._v(" 原子性（atomicity）")]),t._v(" "),s("p",[t._v("原子性，是指一个事务是一个不可分割的工作单位，其中的操作要么都做，要么都不做。如果事务中一个SQL执行失败，则已执行的语句也必须回滚，数据库回退到事务开始前的状态。")]),t._v(" "),s("h5",{attrs:{id:"一致性-consistency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一致性-consistency"}},[t._v("#")]),t._v(" 一致性（consistency）")]),t._v(" "),s("p",[t._v("一致性，是指事务执行结束后，数据库的完整性约束没有被破坏，事务执行的前后都是合法的数据状态。数据库的完整性约束包括但不限于：实体完整性、列完整性、外键约束。")]),t._v(" "),s("h5",{attrs:{id:"隔离性-isolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离性-isolation"}},[t._v("#")]),t._v(" 隔离性（isolation）")]),t._v(" "),s("p",[t._v("通常来说，一个事务所做的修改在最终提交以前，对其它事务是不可见的。")]),t._v(" "),s("h5",{attrs:{id:"持久性-durability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久性-durability"}},[t._v("#")]),t._v(" 持久性（durability）")]),t._v(" "),s("p",[t._v("一旦事务提交，则其所做的修改就会永久保存到数据库中。此时即使系统崩溃，修改的数据也不会丢失。")]),t._v(" "),s("h3",{attrs:{id:"隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[t._v("#")]),t._v(" 隔离级别")]),t._v(" "),s("h5",{attrs:{id:"查看mysql事务隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql事务隔离级别"}},[t._v("#")]),t._v(" 查看MySQL事务隔离级别")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("show variables like 'tx_isolation'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h5",{attrs:{id:"read-uncomitted-读未提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-uncomitted-读未提交"}},[t._v("#")]),t._v(" READ UNCOMITTED（读未提交）")]),t._v(" "),s("p",[t._v("事务中的修改，即使没有提交，对其它事务也都是可见的。事务可以读取未提交的数据，这也被称为脏读。")]),t._v(" "),s("h5",{attrs:{id:"read-committed-读提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-committed-读提交"}},[t._v("#")]),t._v(" READ COMMITTED（读提交）")]),t._v(" "),s("p",[t._v("大多数数据库系统的默认隔离级别都是READ COMMITTED(但MySQL不是)。READ COMMITTED 满足前面提到的隔离性的简单定义：一个事务开始时，只能“看见”已经提交的事务所做的修改。换句话说，一个事务从开始直到提交之前，所做的任何修改对其它事务都是不可见的。解决了脏读的问题。可能会出现不可重复读。")]),t._v(" "),s("h5",{attrs:{id:"repeatable-read-可重复读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repeatable-read-可重复读"}},[t._v("#")]),t._v(" REPEATABLE READ（可重复读）")]),t._v(" "),s("p",[t._v("MySQL默认的隔离级别。在可重复读隔离级别下，事务在启动的时候就”拍了个快照“。注意，这个快照是基于整个库的。REPEATABLE READ 解决了不可重复读的问题。该级别保证了同一个事务中多次读取同样记录的结果是一致的。存在幻读的问题，事务A查询张三，查询不到，插入又不成功。这条数据就像幻觉一样存在，这就是所谓的幻读。")]),t._v(" "),s("h5",{attrs:{id:"serializable-串行化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serializable-串行化"}},[t._v("#")]),t._v(" SERIALIZABLE（串行化）")]),t._v(" "),s("p",[t._v("如果隔离级别为序列化，则用户之间通过一个接一个顺序地执行当前的事务，这种隔离级别提供了事务之间最大限度的隔离。")]),t._v(" "),s("h3",{attrs:{id:"mvcc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[t._v("#")]),t._v(" MVCC")]),t._v(" "),s("p",[t._v("MVCC全称Multi-Version Concurrency Control，既多版本并发控制。MVCC是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问。对数据库的任何修改的提交都不会直接覆盖之前的数据，而是产生一个新的版本与老版本共存，使得读取时可以完全不加锁。")])])}),[],!1,null,null,null);a.default=e.exports}}]);