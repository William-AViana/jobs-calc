const Database = require('./config')

const initDb = {
  async init() {

    // inicia a conecção com o db
    const db = await Database()

    // criar a tabela
    await db.exec(`CREATE TABLE profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthly_budget INT,
      days_per_week INT,
      hours_per_day INT,
      vacation_per_year INT,
      value_hour INT
)`)

    await db.exec(`CREATE TABLE jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      daily_hours INT,
      total_hours INT,
      created_at DATETIME
)`)

    await db.run(`INSERT INTO profile(
      name,
      avatar,
      monthly_budget,
      days_per_week,
      hours_per_day,
      vacation_per_year,
      value_hour
    ) VALUES (
      "William",
      "https://avatars.githubusercontent.com/u/66179186?v=4",
      6000,
      6,
      5,
      40,
      60
)`)

    await db.run(`INSERT INTO jobs(
      name,
      daily_hours,
      total_hours,
      created_at
    ) VALUES (
      "Pizzaria Guloso",
      2,
      1,
      1619514376018
)`)

    await db.run(`INSERT INTO jobs(
      name,
      daily_hours,
      total_hours,
      created_at
    ) VALUES (
      "OneTwo Projects",
      5,
      25,
      1019514376018
)`)

    // fecha a conecção com o db
    await db.close()
  }
}

initDb.init()