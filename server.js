    app.post('/cars', (req, res) => {
        const { modeli, karburanti, viti_i_prodhimit, transmetuesi, kilometrazhi, description } = req.body;
        const sql = "INSERT INTO cars (modeli, karburanti, viti_i_prodhimit, transmetuesi, kilometrazhi, description) VALUES (?, ?, ?, ?, ?, ?);";
        db.query(sql, [modeli, karburanti, viti_i_prodhimit, transmetuesi, kilometrazhi, description], (err, result) => {
            if (err) {
                console.error('There was an error adding a new car:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.status(201).json({ message: 'You have added this car', carId: result.insertId });
        });
    });
    
    app.put('/cars/:id', (req, res) => {
        const carId = req.params.id;
        const { modeli, karburanti, viti_i_prodhimit, transmetuesi, kilometrazhi, description } = req.body;
        const sql = "UPDATE cars SET modeli = ?, karburanti = ?, viti_i_prodhimit = ?, transmetuesi = ?, kilometrazhi = ?, description = ? WHERE id = ?;";
        db.query(sql, [modeli, karburanti, viti_i_prodhimit, transmetuesi, kilometrazhi, description, carId], (err, result) => {
            if (err) {
                console.error('There was an error updating the car info:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'This car cannot be found' });
            }
            return res.json({ message: 'You have updated the car info' });
        });
    });
    
    app.delete('/cars/:id', (req, res) => {
        const carId = req.params.id;
        const sql = "DELETE FROM cars WHERE id = ?;";
        db.query(sql, [carId], (err, result) => {
            if (err) {
                console.error('Error deleting the car:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'This car cannot be found' });
            }
            return res.json({ message: 'You have deleted this car' });
        });
    });
    
