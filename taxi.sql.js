import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db= await sqlite.open
({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() 
{
    //add people to the queue
   // const db = await db;
    await db.run('INSERT INTO taxi_queue (passenger_queue_count) VALUES (1)');
}

export async function leaveQueue(id) 
{
    // delete from the database
    const sql = `delete from taxi_queue where id = ?`
    await db.run(sql, [id])
}

export async function joinTaxiQueue() 
{
    const sql = 'update taxi_queue set taxi_queue_count = taxi_queue_count+1'
    await db.run(sql);

}

export async function queueLength() 
{
    const result = await db.all('select passenger_queue_count from taxi_queue');
    return result[0].passenger_queue_count;

}

export async function taxiQueueLength() 
{
    const result = await db.all('select taxi_queue_count from taxi_queue');
    return result[0].taxi_queue_count;

}

export async function taxiDepart() 
{
    const db = await dbPromise;
  // Check if there are enough passengers in the queue (12 or more)
  const passengersCount = await queueLength();
  if (passengersCount >= 12) {
    // Remove a taxi from the taxi queue
    await db.run('DELETE FROM taxi_queue WHERE id = (SELECT id FROM taxi_queue LIMIT 1)');
    // Remove 12 passengers from the passenger queue
    await db.run('DELETE FROM passenger_queue WHERE id IN (SELECT id FROM passenger_queue LIMIT 12)');
  }

}