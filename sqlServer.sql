CREATE TABLE [user] (
  [id] serial PRIMARY KEY,

  [name] varchar(150) NOT NULL,
  [email] varchar(100) UNIQUE NOT NULL,
  [password] varchar(100) NOT NULL,
  [created_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  [updated_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
)
GO

CREATE TABLE [orders] (
  [id] serial PRIMARY KEY,
  [user_id] int,
  [created_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  [updated_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
)
GO

CREATE TABLE [store] (
  [id] SERIAL PRIMARY KEY,
  [name] varchar(150) NOT NULL,
  [zipcode] varchar(8) NOT NULL,
  [address] varchar(100) NOT NULL,
  [created_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  [updated_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
)
GO

CREATE TABLE [store_item] (
  [id] SERIAL PRIMARY KEY,
  [name] varchar(150) NOT NULL,
  [price] decimal(10,2) NOT NULL,
  [description] varchar(100),
  [store_id] int,
  [created_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  [updated_at] TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
)
GO

CREATE TABLE [order_store_item] (
  [store_item_id] int,
  [order_id] int
)
GO

ALTER TABLE [orders] ADD FOREIGN KEY ([user_id]) REFERENCES [user] ([id])
GO

ALTER TABLE [store_item] ADD FOREIGN KEY ([store_id]) REFERENCES [store] ([id])
GO

ALTER TABLE [order_store_item] ADD FOREIGN KEY ([store_item_id]) REFERENCES [store_item] ([id])
GO

ALTER TABLE [order_store_item] ADD FOREIGN KEY ([order_id]) REFERENCES [orders] ([id])
GO

